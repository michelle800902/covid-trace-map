import types from './types';

const updateCenter = (center: [number, number]) => ({
    center,
    type: types.UPDATE_CENTER,
});

const updateZoom = (zoom: number) => ({
    zoom,
    type: types.UPDATE_ZOOM,
});

const updateMinZoom = (minZoom: number) => ({
    minZoom,
    type: types.UPDATE_MIN_ZOOM,
});

const updateMaxZoom = (maxZoom: number) => ({
    maxZoom,
    type: types.UPDATE_MAX_ZOOM,
});

export default {
    updateCenter,
    updateZoom,
    updateMinZoom,
    updateMaxZoom,
};
