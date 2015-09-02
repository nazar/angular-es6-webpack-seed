var path = require( 'path' );
var webpack = require( 'webpack' );
var CompressionPlugin = require( 'compression-webpack-plugin' );

var webpackProdConfig = {
    overrides: {
        entry: {
            app: [
                './src/app/index.js'
            ]
        }
    },

    loaders: [
        {
            test: /\.js$/,
            loaders: [ 'ng-annotate', 'babel' ],
            include: path.join( __dirname, 'src', 'app' ),
            exclude: path.join( __dirname, 'node_modules' )
        }
    ],

    plugins: [
        new webpack.DefinePlugin( {
            'process.env': {
                NODE_ENV: JSON.stringify( 'production' )
            }
        } ),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new CompressionPlugin({
            asset: '{file}.gz',
            algorithm: 'gzip',
            threshold: 10240,
            minRatio: 0.8
        } )
    ]
};

module.exports = require( './webpack.config' )( webpackProdConfig );