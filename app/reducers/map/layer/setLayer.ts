import { mapStyleData } from '@app/constants/toolbar';

const initialState = {
    baseLayer: {
        mapStyle: mapStyleData[0].name as string,
        visible: true as boolean,
    },
};

const setLayer = (state = initialState, action): typeof initialState => {
    switch (action.type) {
        default:
            return state;
    }
};

export default setLayer;
