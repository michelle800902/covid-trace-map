import types from '@app/actions/map/types';

const initialState = {
    center: [31.4606, 20.7927],
    zoom: 1,
    maxZoom: 18,
    minZoom: 1,
};

const setMap = (state = initialState, action): typeof initialState => {
    switch (action.type) {
        case types.UPDATE_CENTER:
            return {
                ...state,
                center: action.center,
            };
        case types.UPDATE_ZOOM:
            return {
                ...state,
                zoom: action.zoom,
            };
        case types.UPDATE_MIN_ZOOM:
            return {
                ...state,
                minZoom: action.minZoom,
            };
        case types.UPDATE_MAX_ZOOM:
            return {
                ...state,
                maxZoom: action.minZoom,
            };
        default:
            return state;
    }
};

export default setMap;
