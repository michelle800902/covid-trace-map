const initialState = {
    baseLayer: {
        mapStyle: 'Google map',
        visible: true,
    },
};

const setLayer = (state = initialState, action): typeof initialState => {
    switch (action.type) {
        default:
            return state;
    }
};

export default setLayer;
