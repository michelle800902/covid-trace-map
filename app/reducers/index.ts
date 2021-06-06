import { combineReducers } from 'redux';
import setMap from './map/setMap';
import setLayer from './map/layer/setLayer';
import setToolbar from './toolbar/setToolbar';
import setControl from './toolbar/control/setControl';
import setLocation from './toolbar/location/setLocation';
import setPolygon from './toolbar/polygon/setPolygon';
import setRuler from './toolbar/ruler/setRuler';
import setImport from './toolbar/import/setImport';
import setExport from './toolbar/export/setExport';
import setBaseMap from './toolbar/baseMap/setBaseMap';
import setZoom from './toolbar/zoom/setZoom';

const appStore = combineReducers({
    setMap,
    setLayer,
    setToolbar,
    setControl,
    setLocation,
    setPolygon,
    setRuler,
    setImport,
    setExport,
    setBaseMap,
    setZoom,
});

export default appStore;
export type TRootStore = ReturnType <typeof appStore>;
