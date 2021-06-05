import { combineReducers } from 'redux';
import setMap from './map/setMap';
import setToolbar from './toolbar/setToolbar';

const appStore = combineReducers({
    setMap,
    setToolbar,
});

export default appStore;
export type TRootStore = ReturnType <typeof appStore>;
