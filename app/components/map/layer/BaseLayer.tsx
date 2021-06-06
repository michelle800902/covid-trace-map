import { useEffect, useContext } from 'react';
import * as mapConstants from '@app/constants/map';
import * as mapboxConstants from '../MapboxConstants';
import MapContext from '../MapContext';

interface Props {
    mapStyle: string;
    visible: boolean;
}
interface IBaseLayerObj {
    name: string;
    type: string;
    url: string;
}

function BaseLayer(props: Props) {
    const { map, eventHandler } = useContext(MapContext);
    const config = {
        id: mapConstants.layer.baseLayer,
        source: (url) => ({
            type: mapboxConstants.sourceType.raster,
            tiles: [url],
            tileSize: 256,
        }),
        layer: {
            id: mapConstants.layer.baseLayer,
            type: mapboxConstants.layerType.raster,
            source: mapConstants.layer.baseLayer, // source id
        },
    };

    const getCurrentBaseLayerObj = (mapStyleName: string): IBaseLayerObj => (
        mapConstants.baseLayer.find((obj) => obj.name === mapStyleName)
    );

    useEffect(() => {
        if (map && eventHandler) {
            const baseLayerObj = getCurrentBaseLayerObj(props.mapStyle);
            eventHandler.addSource(config.id, config.source(baseLayerObj.url));
            eventHandler.addLayer(mapConstants.layer.background, {
                id: mapConstants.layer.background,
                type: mapboxConstants.layerType.background,
                paint: {
                    'background-color': '#f2f2f2',
                },
            });
            eventHandler.addLayer(config.id, config.layer);
        }
        return () => {
            if (!eventHandler) return;
            eventHandler.removeLayer(config.id);
        };
    }, []);

    useEffect(() => {
        if (!map || !eventHandler) return;
        const baseLayerObj = getCurrentBaseLayerObj(props.mapStyle);
        eventHandler.updateSource(config.id, config.source(baseLayerObj.url));
    }, [props.mapStyle]);

    useEffect(() => {
        if (eventHandler) eventHandler.setLayerVisible(config.id, props.visible);
    }, [props.visible]);

    return null;
}

export default BaseLayer;
