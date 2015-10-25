var webpack = require('webpack');
//var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
//var pathToReactProd = path.resolve(node_modules, 'react/dist/react.min.js');
//var pathToReactDev = path.resolve(node_modules, 'react/dist/react.js');
var pathToReactAddonsProd = path.resolve(node_modules, 'react/dist/react-with-addons.min.js');
var pathToReactAddonsDev = path.resolve(node_modules, 'react/dist/react-with-addons.js');
var pathToReactBootstrapGridDev = path.resolve(node_modules, 'react-bootstrap/dist/react-bootstrap.js');
var pathToBootstrapCss = path.resolve(node_modules, 'bootstrap/dist/css/bootstrap.css');

var PROD = findProductionOption();

module.exports = {
    context: __dirname,
    resolve: {
        alias: {
            //'react': PROD ? pathToReactAddonsProd : pathToReactAddonsDev,
            //'react-bootstrap': pathToReactBootstrapGridDev
            'bootstrap-css': pathToBootstrapCss
        }
    },
    entry: {
        libs: ['react'],
        app: [
            __dirname +'/app/index.js'
        ],
        style: PROD ? [] : []
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/assets',
        filename: PROD ? '[name].bundle.min.js' : '[name].bundle.js'
    },
    plugins: PROD ? [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['libs', 'style'],
            minChunks: Infinity
        }),
        //new ExtractTextPlugin('style.css', {
        //  allChunks: true
        //}),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {
                warnings: false
            }
        })
    ] : [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['libs', 'style'],
            minChunks: Infinity
        })
        //,
        //new ExtractTextPlugin('style.css', {
        //  allChunks: true
        //})
    ],
    module: {
        preLoaders: [
            {
                test: /\.(jsx|js)?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'eslint-loader'
            }
        ],
        loaders: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel?optional=runtime'
            },
            {
                test: /\.scss$/,
                loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]_[local]!sass!'
            },
            {
                test: /\.css$/,
                loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]_[local]'
            },
            {
                test: /\.(ttf|eot|svg|woff(2)?)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=150000&mimetype=application/font-woff"
                //loader : 'url?limit=200000'
            }
        ]
    }
};

function findProductionOption(){
    var PROD = false;
    for (var i=0; i<process.argv.length; i++){
        if (process.argv[i] === '--production'){
            PROD = true;
            break;
        }
    }
    return PROD;
}