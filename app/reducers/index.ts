import { combineReducers } from 'redux';

const appStore = combineReducers({

});

export default appStore;
export type TRootStore = ReturnType <typeof appStore>;
