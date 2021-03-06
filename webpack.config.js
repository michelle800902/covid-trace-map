const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    entry: {
        index: './app/index.tsx',
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'js/bundle.js',
    },
    resolve: {
        alias: {
            '@doc': path.resolve(__dirname, './doc'),
            '@app': path.resolve(__dirname, './app'),
            '@common': path.resolve(__dirname, './app/common_modules'),
        },
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    node: {
        fs: 'empty',
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loaders: ['ts-loader'],
            },
            {
                test: /\.jsx$|\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../../',
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: (loader) => (
                                [
                                    require('postcss-import')(
                                        {
                                            path: ['app/styles'],
                                        },
                                    ),
                                    require('postcss-mixins')({}),
                                    require('postcss-simple-vars')({ silent: true }),
                                    require('postcss-nested')({}),
                                ]
                            ),
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpg|woff(2)?|ttf|eot|svg|cur)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 20480,
                        name: 'media/[name].[ext]',
                    },
                },
            },
            {
                test: /\.txt$/i,
                exclude: /node_modules/,
                loader: 'raw-loader',
            },
            {
                test: /\.(json|geojson)$/,
                exclude: /node_modules/,
                loader: 'json-loader',
            },
        ],
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                // cache: true,
                extractComments: true,
                parallel: true,
                // terserOptions: {
                //     // ecma: 8,
                //     warnings: true,
                //     // unused: false,
                //     // mangle: false,
                // },
            }),
            new OptimizeCSSAssetsPlugin({}),
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'app/index.html',
            filename: 'index.html',
            chunks: ['index'],
            inject: 'body',
            minify: {
                collapseWhitespace: true,
                conservativeCollapse: true,
                decodeEntities: true,
                minifyCSS: false,
                minifyJS: false,
                removeComments: true,
                removeScriptTypeAttributes: true,
            },
        }),
        new CopyWebpackPlugin([
            {
                from: 'app/favicon.ico',
                to: 'favicon.ico',
            },
        ]),
        new MiniCssExtractPlugin({
            filename: 'css/styles.css',
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
            },
        }),
    ],
};
