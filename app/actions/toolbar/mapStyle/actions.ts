import { IMapStyleDataItem } from '@app/reducers/toolbar/mapStyle/setMapStyle';
import types from './types';

const updateMapStyleData = (data: IMapStyleDataItem[]) => ({
    data,
    type: types.UPDATE_MAP_STYLE_DATA,
});

const updateMapStyleSelection = (selection: string) => ({
    selection,
    type: types.UPDATE_MAP_STYLE_SELECTION,
});

export default {
    updateMapStyleData,
    updateMapStyleSelection,
};
