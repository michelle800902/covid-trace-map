export const layer = {
    background: 'background',
    building: 'building',
    baseLayer: 'baseLayer',
    draw: 'draw',
    polygon: 'polygon',
};

export const baseLayer = [
    {
        name: 'Google map',
        type: 'raster',
        url: 'https://mt.google.com/vt?x={x}&y={y}&z={z}&lyrs=m&hl=en',
    },
    {
        name: 'Google map(terrain)',
        type: 'raster',
        url: 'https://mt.google.com/vt?x={x}&y={y}&z={z}&lyrs=p&hl=en',
    },
    {
        name: 'Google map(satellite only)',
        type: 'raster',
        url: 'https://mt.google.com/vt?x={x}&y={y}&z={z}&lyrs=s&hl=en',
    },
    {
        name: 'OpenStreetMap',
        type: 'raster',
        url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    },
    {
        name: 'Bing road',
        type: 'raster',
        url: 'https://t2.ssl.ak.dynamic.tiles.virtualearth.net/comp/ch/{quadkey}?mkt=en-us&it=G,BX,L,LA&shading=hill&og=134&n=z&c4w=1',
    },
    {
        name: 'Bing aerial',
        type: 'raster',
        url: 'https://t2.ssl.ak.dynamic.tiles.virtualearth.net/comp/ch/{quadkey}?mkt=en-US&it=A,G,L,LA&shading=hill&og=58&n=z&c4w=1',
    },
    {
        name: 'Cycle map',
        type: 'raster',
        url: 'https://b.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png',
    },
    {
        name: 'Mapbox Streets',
        type: 'vector',
        url: 'mapbox://styles/mapbox/streets-v11',
    },
    {
        name: 'Mapbox Outdoors',
        type: 'vector',
        url: 'mapbox://styles/mapbox/outdoors-v11',
    },
    {
        name: 'Mapbox Light',
        type: 'vector',
        url: 'mapbox://styles/mapbox/light-v10',
    },
    {
        name: 'Mapbox Dark',
        type: 'vector',
        url: 'mapbox://styles/mapbox/dark-v10',
    },
    {
        name: 'Mapbox Satellite',
        type: 'vector',
        url: 'mapbox://styles/mapbox/satellite-v9',
    },
    {
        name: 'Mapbox Satellite Streets',
        type: 'vector',
        url: 'mapbox://styles/mapbox/satellite-v11',
    },
];

export const drawingMode = {
    ruler: 'ruler',
    polygon: 'polygon',
    group: 'group',
    none: 'none',
};

export const drawingType = {
    polygon: 'Polygon',
    circle: 'Circle',
    line: 'LineString',
    lineString: 'LineString',
    freehand: 'LineString',
};

export const drawingTypeOption = {
    polygon: 'Polygon',
    circle: 'Circle',
    line: 'Line',
    lineString: 'LineString',
    freehand: 'Freehand',
};
