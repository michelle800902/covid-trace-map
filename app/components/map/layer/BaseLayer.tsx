import { useEffect, useContext } from 'react';
import * as mapConstants from '@app/constants/map';
import MapContext from '../MapContext';

interface Props {
    mapStyle: string;
}

interface IMapStyleObj {
    name: string;
    type: string;
    url: string;
}

function BaseLayer(props: Props) {
    const { map, eventHandler } = useContext(MapContext);

    useEffect(() => {
        if (!map || !eventHandler) return;
        const currentMapStyleObj = mapConstants.mapStlyes.find((obj: IMapStyleObj) => obj.name === props.mapStyle);
        eventHandler.setMapStyle(currentMapStyleObj.url);
    }, [props.mapStyle]);

    return null;
}

export default BaseLayer;
