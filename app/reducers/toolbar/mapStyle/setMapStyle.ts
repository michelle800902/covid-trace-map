import { mapStyleData } from '@app/constants/toolbar';
import types from '@app/actions/toolbar/mapStyle/types';

export interface IMapStyleDataItem {
    id: number;
    name: string;
}

const initialState = {
    data: mapStyleData as IMapStyleDataItem[],
    selection: mapStyleData[0].name as string,
};

const setMapStyle = (state = initialState, action): typeof initialState => {
    switch (action.type) {
        case types.UPDATE_MAP_STYLE_DATA:
            return {
                ...state,
                data: action.data,
            };
        case types.UPDATE_MAP_STYLE_SELECTION:
            return {
                ...state,
                selection: action.selection,
            };
        default:
            return state;
    }
};

export default setMapStyle;
