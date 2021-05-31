const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const postcssImport = require('postcss-import');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    devServer: {
        inline: true,
        port: 3000,
        historyApiFallback: {
            rewrites: [
                { from: /^(\/(index)?)?$/, to: '/index.html' },
            ],
        },
    },
    devtool: 'eval-source-map',
    entry: {
        index: './app/index.tsx',
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'js/[name]/bundle.js',
        publicPath: '/',
    },
    resolve: {
        alias: {
            '@app': path.resolve(__dirname, './app'),
            '@common': path.resolve(__dirname, './app/common_modules'),
        },
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    node: {
        fs: 'empty',
    },
    mode: 'development',
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
                        name: 'media/index/[name].[ext]',
                    },
                },
            },
            {
                test: /\.txt$/i,
                exclude: /node_modules/,
                loader: 'raw-loader',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: `${__dirname}/app/index.html`,
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
            {
                from: 'doc/api',
                to: 'api',
            },
        ]),
        new MiniCssExtractPlugin({
            filename: 'css/[name]/styles.css',
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
            },
        }),
    ],
};
