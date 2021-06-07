/*
    https://docs.mapbox.com/mapbox-gl-js/api/map/
    https://docs.mapbox.com/mapbox-gl-js/api/properties/#requestparameters
    https://docs.mapbox.com/mapbox-gl-js/api/markers/#scalecontrol
    glyphs = "mapbox://fonts/mapbox/{fontstack}/{range}.pbf";
    https://docs.mapbox.com/mapbox-gl-js/api/properties/#requestparameters
*/

import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { isEmpty, pull, debounce, get } from 'lodash';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import * as mapConstants from '@app/constants/map';
import BaseLayerContainer from '@app/containers/map/layer/BaseLayerContainer';
import MapContext from './MapContext';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import 'mapbox-gl/dist/mapbox-gl.css';

interface Props {
    center: [number, number];
    zoom: number;
    minZoom: number;
    maxZoom: number;
}

mapboxgl.accessToken = 'pk.eyJ1IjoiaHl1YW4xMyIsImEiOiJjanRkdjlwamUxODRkNGFwY2xhbHFkNmU4In0.5UKmSUsXVHTlCXpUWlyidg';
mapboxgl.maxParallelImageRequests = 5;

const LayerOrder = [
    mapConstants.layer.baseLayer,
    mapConstants.layer.building,
];

const MapWrapper = styled.div`
    width: 100%;
    height: 100%;
    font-family: 'Open Sans', sans-serif;

    /* mapbox */
    .mapboxgl-canvas:focus {
        outline: none;
    }
    .mapboxgl-ctrl-attrib {
        display: none;
    }
    .mapboxgl-popup {
        position: absolute;
        top: -1rem;
        max-width: 400px;
    }
    .mapboxgl-control-container {
        .mapboxgl-ctrl-logo {
            display: none;
        }
        .mapboxgl-ctrl-bottom-left {
            position: absolute;
            margin: 2rem 1rem;
        }
        .mapboxgl-ctrl-scale {
            all: revert;
            border: 1px solid;
            border-bottom: 0;
            margin-top: -1px;
            text-align: center;
            overflow-wrap: break-word;

            &:first-child {
                border: 1px solid;
                border-top: 0;
            }
        }
    }
`;

function Map(props: Props) {
    const [map, setMap] = useState(null);
    const [seletedFeatures, setSeletedFeatures] = useState(null);

    const mapDOM = useRef(null);
    const eventHandler = useRef<any>(undefined);

    /* --- eventHandler --- */
    const isSourceExist = (map, id: string) : boolean => {
        try {
            map.getSource(id);
            return !isEmpty(map.getSource(id));
        } catch (e) {
            return false;
        }
    };

    const isLayerExist = (map, id: string) : boolean => {
        try {
            map.getLayer(id);
            return !isEmpty(map.getLayer(id));
        } catch (e) {
            return false;
        }
    };

    const addSource = (map, id: string, sourceConfig: any) => {
        if (map && !isSourceExist(map, id)) map.addSource(id, sourceConfig);
    };

    const addLayer = (map, id: string, layerConfig: any) => {
        const layerIndex = LayerOrder.indexOf(id);
        const nextLayerIndex = LayerOrder.findIndex((layerId) => (LayerOrder.indexOf(layerId) > layerIndex) && isLayerExist(map, layerId));
        const nextLayerId = nextLayerIndex > 0 ? LayerOrder[nextLayerIndex] : undefined;
        if ((isLayerExist(map, nextLayerId) || isEmpty(nextLayerId)) && !isLayerExist(map, layerConfig.id)) map.addLayer(layerConfig, nextLayerId);
    };

    const reloadSource = (map, id) => { // change params
        if (!map) return;
        const styleSourceCaches = get(map, `style.sourceCaches.${id}`, {});
        if (styleSourceCaches.clearTiles instanceof Function) styleSourceCaches.clearTiles();
        // Load the new tiles for the current viewport (map.transform -> viewport)
        if (styleSourceCaches.update instanceof Function) styleSourceCaches.update(map.transform);
        map.triggerRepaint();
    };

    const removeSource = (map, id) => {
        if (map && isSourceExist(map, id)) map.removeSource(id);
    };

    const removeLayer = (map, id) => {
        if (map && isLayerExist(map, id)) map.removeLayer(id);
    };

    const updateSource = (map, id: string, sourceConfig: any) => { // change sourceConfig (ex: change url)
        if (!map) return;
        const layerMemo = map.getStyle().layers.filter((l) => l.source === id);
        layerMemo.forEach((l) => isLayerExist(map, l.id) && map.removeLayer(l.id));
        if (isSourceExist(map, id)) removeSource(map, id);
        addSource(map, id, sourceConfig);
        layerMemo.forEach((l) => addLayer(map, l.id, l));
    };

    const updateLayer = (map, id: string, layerConfig: any) => { // change layerConfig (ex: change sourceId)
        if (!map) return;
        if (isLayerExist(map, id)) removeLayer(map, id);
        addLayer(map, id, layerConfig);
    };

    const setLayerVisible = (map, id, visible) => {
        if (!map || !isLayerExist(map, id)) return;
        const visibility = visible ? 'visible' : 'none';
        if (map.getLayoutProperty(id, 'visibility') !== visibility) map.setLayoutProperty(id, 'visibility', visibility);
    };

    const getOpacity = (layer) => {
        if (layer.paint) {
            const key = Object.keys(layer.paint).find((k) => /opacity/i.test(k));
            return key ? layer.paint[key] : 1;
        }
        return 1;
    };

    const setEventHandler = (map) => {
        if (!map) return undefined;
        return {
            isSourceExist: (sourceId: string) => isSourceExist(map, sourceId),
            isLayerExist: (layerId: string) => isLayerExist(map, layerId),
            addSource: (sourceId: string, sourceConfig: any) => addSource(map, sourceId, sourceConfig),
            addLayer: (layerId: string, layerConfig: any) => addLayer(map, layerId, layerConfig),
            reloadSource: (sourceId: string) => reloadSource(map, sourceId), // change params
            updateSource: (sourceId: string, sourceConfig: any) => updateSource(map, sourceId, sourceConfig), // change sourceConfig (ex: change url)
            updateLayer: (layerId: string, layerConfig: any) => updateLayer(map, layerId, layerConfig), // change layerConfig (ex: change sourceId)
            removeSource: (id: string) => removeSource(map, id),
            removeLayer: (id: string) => removeLayer(map, id),
            setLayerVisible: (id: string, visible: boolean) => setLayerVisible(map, id, visible),
        };
    };

    const createMap = () => {
        const mapInstance = new mapboxgl.Map({
            container: mapDOM.current,
            // style: 'mapbox://styles/mapbox/light-v10',
            center: props.center,
            zoom: props.zoom,
            minZoom: props.minZoom,
            maxZoom: props.maxZoom,
            // attributionControl: false,
            // dragRotate: false,
            // pitch: 0,
            // bearing: 0,
            // antialias: true,
        });

        mapInstance.addControl(
            new MapboxGeocoder({
                mapboxgl,
                accessToken: mapboxgl.accessToken,
            }),
        );

        mapInstance.on('movestart', () => {
            // props.onMoveStart(mapInstance);
        });

        mapInstance.on('moveend', () => {
            // props.onMoveEnd(mapInstance);
        });

        mapInstance.on('mousemove', (e) => {
            //
        });

        mapInstance.on('mouseout', () => {
            // clearTimeout(hoveredTimer.current);
            // props.onHover(null, [], []);
        });

        mapInstance.on('click', (e) => {
            //
        });

        mapInstance.on('contextmenu', (e) => {
            //
        });

        eventHandler.current = setEventHandler(mapInstance);
        setMap(mapInstance);
    };

    useEffect(() => {
        createMap();
    }, []);

    useEffect(() => {
        if (map) {
            const prevCenter = map.getCenter();
            if (JSON.stringify(prevCenter) !== JSON.stringify(props.center)) {
                map.setCenter(props.center);
            }
        }
    }, [props.center]);

    useEffect(() => {
        if (map) {
            const prevZoom = map.getZoom();
            if (prevZoom !== props.zoom) {
                map.zoomTo(props.zoom, {
                    duration: 150,
                    animate: false,
                });
            }
        }
    }, [props.zoom]);

    useEffect(() => {
        if (map) map.setMaxZoom(props.maxZoom);
    }, [props.minZoom]);

    useEffect(() => {
        if (map) map.setMinZoom(props.minZoom);
    }, [props.maxZoom]);

    return (
        <MapWrapper ref={mapDOM}>
            {
                map
                && (
                    <MapContext.Provider
                        value={{
                            map,
                            seletedFeatures,
                            eventHandler: eventHandler.current,
                        }}
                    >
                        <BaseLayerContainer />
                    </MapContext.Provider>
                )
            }
        </MapWrapper>
    );
}

export default Map;
