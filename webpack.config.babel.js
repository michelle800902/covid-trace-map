const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const postcssImport = require('postcss-import');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    devServer: {
        inline: true,
        port: 3000,
    },
    entry: [
        'babel-polyfill', './app/index.tsx',
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'static/bundle.js',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules\/(?!(^gh))/,
                loaders: ['babel-loader', 'ts-loader'],
            },
            {
                test: /\.jsx$|\.js$/,
                exclude: /node_modules\/(?!(^gh))/, // private modules need to be transpiled to ES5.
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',
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
                                    postcssImport({
                                        root: loader.resourcePath,
                                    }),
                                ]
                            ),
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpg|woff|woff2|eot|ttf|svg|cur)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 20480,
                        name: './resources/media/index/[name].[ext]',
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
            template: `${__dirname}/app/index.html`,
            filename: 'index.html',
            inject: 'body',
            minify: {
                collapseWhitespace: true,
                conservativeCollapse: true,
                decodeEntities: true,
                minifyCSS: true,
                minifyJS: true,
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
            filename: 'static/styles.css',
        }),
    ],
};
