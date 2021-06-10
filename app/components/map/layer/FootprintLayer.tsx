import { useEffect, useContext } from 'react';
import sourceData from '@doc/footprints_tw/footprints_20210516-0522.geojson';
import * as mapConstants from '@app/constants/map';
import * as mapboxConstants from '../MapboxConstants';
import MapContext from '../MapContext';

interface Props {
    visible: boolean;
}

function FootprintLayer(props: Props) {
    const { map, eventHandler } = useContext(MapContext);
    const config = {
        id: 'footprint',
        source: {
            type: mapboxConstants.sourceType.geojson,
            data: sourceData,
        },
        layer: {
            id: 'footprint',
            source: 'footprint',
            type: mapboxConstants.layerType.circle,
            paint: {
                'circle-radius': 3,
                'circle-stroke-width': 2,
                'circle-color': 'red',
                'circle-stroke-color': 'white',
            },
        },
    };

    useEffect(() => {
        if (!eventHandler) return;
        map.on('style.load', () => {
            console.log('sourceData:', sourceData);
            eventHandler.addSource(config.id, config.source);
            eventHandler.addLayer(config.layer.id, config.layer);
        });
        return () => {
            eventHandler.removeLayer(config.layer.id);
        };
    }, []);

    useEffect(() => {
        if (!eventHandler) return;
        eventHandler.setLayerVisible(config.layer.id, props.visible);
    }, [props.visible]);

    return null;
}

export default FootprintLayer;
