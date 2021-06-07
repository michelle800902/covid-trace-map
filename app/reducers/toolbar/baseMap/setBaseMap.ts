import { baseMapData } from '@app/constants/toolbar';

export interface IBaseMapDataItem {
    id: number;
    name: string;
}

const initialState = {
    data: baseMapData as IBaseMapDataItem[],
    selected: baseMapData[0].name as string,
};

const setBaseMap = (state = initialState, action): typeof initialState => {
    switch (action.type) {
        default:
            return state;
    }
};

export default setBaseMap;
