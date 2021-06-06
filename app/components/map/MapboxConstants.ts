/*
    https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/
    https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/#type
*/

export const layerType = {
    background: 'background',
    fill: 'fill',
    line: 'line',
    symbol: 'symbol',
    raster: 'raster',
    circle: 'circle',
    'fill-extrusion': 'fill-extrusion',
    heatmap: 'heatmap',
    hillshade: 'hillshade',
};

export const sourceType = {
    raster: 'raster',
    vector: 'vector',
    rasterTiles: 'raster-tiles',
    'raster-dem': 'raster-dem',
    geojson: 'geojson',
    image: 'image',
    video: 'video',
};

export const geojsonSourceConfig = {
    type: sourceType.geojson,
    data: {
        type: 'FeatureCollection',
        features: [],
    },
};
