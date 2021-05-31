/*
    https://docs.mapbox.com/mapbox-gl-js/api/map/
    https://docs.mapbox.com/mapbox-gl-js/api/properties/#requestparameters
    https://docs.mapbox.com/mapbox-gl-js/api/markers/#scalecontrol
    glyphs = "mapbox://fonts/mapbox/{fontstack}/{range}.pbf";
    https://docs.mapbox.com/mapbox-gl-js/api/properties/#requestparameters
*/

import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import mapboxgl from 'mapbox-gl';
import { isEmpty, pull, debounce, get } from 'lodash';
import 'mapbox-gl/dist/mapbox-gl.css';

interface Props {
    center: [number, number];
    zoom: number;
    minZoom: number;
    maxZoom: number;
}

mapboxgl.accessToken = 'pk.eyJ1IjoiaHl1YW4xMyIsImEiOiJjanRkdjlwamUxODRkNGFwY2xhbHFkNmU4In0.5UKmSUsXVHTlCXpUWlyidg';
mapboxgl.maxParallelImageRequests = 5;

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
    const mapDOM = useRef(null);
    const [map, setMap] = useState(null);

    const createMap = () => {
        const mapInstance = new mapboxgl.Map({
            container: mapDOM.current,
            style: 'mapbox://styles/mapbox/light-v10',
            center: props.center,
            zoom: props.zoom,
            minZoom: props.minZoom,
            maxZoom: props.maxZoom,
        });
        setMap(mapInstance);
    };

    useEffect(() => {
        createMap();
    }, []);

    return (
        <MapWrapper ref={mapDOM}>
            {
                //
            }
        </MapWrapper>
    );
}

export default Map;
