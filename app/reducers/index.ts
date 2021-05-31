import { combineReducers } from 'redux';
import setMap from './map/setMap';

const appStore = combineReducers({
    setMap,
});

export default appStore;
export type TRootStore = ReturnType <typeof appStore>;
