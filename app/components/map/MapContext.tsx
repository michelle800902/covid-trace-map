import { createContext } from 'react';
import mapboxgl from 'mapbox-gl';

interface MapInterface {
    map: mapboxgl.Map | null;
    eventHandler: EventHandler | undefined;
    seletedFeatures?: any[] | null;
}

interface EventHandler {
    addSource: (id: string, sourceConfig: any) => void;
    addLayer: (id: string, layerConfig: any) => void;
    reloadSource: (id: string) => void;                    // change params
    updateSource: (id: string, sourceConfig: any) => void; // change sourceConfig (ex: change url)
    updateLayer: (id: string, layerConfig: any) => void;   // change layerConfig (ex: change sourceId)
    removeSource: (id: string) => void,
    removeLayer: (id: string) => void,
    setLayerVisible: (id: string, visible: boolean) => void;
}

const MapContext = createContext<MapInterface>(undefined);

export default MapContext;
