import { useEffect, useContext } from 'react';
import * as mapConstants from '@app/constants/map';
import * as mapboxConstants from '../MapboxConstants';
import MapContext from '../MapContext';

interface Props {
    mapStyle: string;
}
interface IBaseLayerObj {
    name: string;
    type: string;
    url: string;
}

function BaseLayer(props: Props) {
    const { map, eventHandler } = useContext(MapContext);

    const getCurrentStyleConfig = (mapStyleName: string): IBaseLayerObj => (
        mapConstants.mapStlyes.find((obj) => obj.name === mapStyleName)
    );

    useEffect(() => {
        if (!map || !eventHandler) return;
        const currentStyleConfig = getCurrentStyleConfig(props.mapStyle);
        eventHandler.setMapStyle(currentStyleConfig.url);
    }, [props.mapStyle]);

    return null;
}

export default BaseLayer;
