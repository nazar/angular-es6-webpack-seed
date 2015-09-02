var _ = require( 'lodash' );
var path = require( 'path' );
var webpack = require( 'webpack' );
var HtmlWebpackPlugin = require('html-webpack-plugin');

var pathAppTo;

function pathTo() {
    return path.join( __dirname, 'src', path.join.apply( path, arguments ) );
}

pathAppTo = _.partial( pathTo, 'app' );

module.exports = function ( options ) {
    var config = _.merge( {}, {
        entry: {
            vendor: [
                'jquery',
                'bootstrap/dist/js/bootstrap.min.js',
                'font-awesome/css/font-awesome.min.css',
                'angular/angular.min.js',
                'angular-animate',
                'angular-aria',
                'angular-ui-router',
                'bluebird',
                'lodash'
            ]
        },

        output: {
            path: path.join( __dirname, 'build' ),
            filename: 'bundle/app-[hash].js',
            publicPath: '/'
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoErrorsPlugin(),
            new webpack.ProvidePlugin( {
                jQuery: 'jquery',
                $: 'jquery',
                'window.jQuery': 'jquery'
            } ),
            new HtmlWebpackPlugin({
                template: './src/app/templates/index.html',
                inject: 'body'
            }),
            new webpack.optimize.CommonsChunkPlugin( 'vendor', 'bundle/vendor-[hash].js' )
        ],
        resolve: {
            extensions: [ '', '.js' ],
            alias: {
                //application aliases
                //actions: pathAppTo( 'actions' ),
                //components: pathAppTo( 'components' ),
                //lib: pathAppTo( 'lib' ),
                //mixins: pathAppTo( 'mixins' ),
                //modals: pathAppTo( 'modals' ),
                //models: pathAppTo( 'models' ),
                //resources: pathAppTo( 'resources' ),
                //services: pathAppTo( 'services' ),
                templates: pathAppTo( 'templates' ),
                //views: pathAppTo( 'views' ),
                //utils: pathAppTo( 'utils' ),

                assets: pathTo( 'assets' ),
                //config: pathAppTo( 'config.js' ),

                //vendor aliases
                jquery: 'jquery/dist/jquery.min.js'//,
                //angular: 'angular/angular.min.js'
            }
        },
        module: {
            loaders: [
                {
                    test: /\.html$/,
                    loader: 'file?name=templates/[name]-[hash:6].html'
                },
                {
                    test: /\.css$/,
                    loader: 'style-loader!css-loader'
                },
                {
                    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    loader: 'url-loader?limit=10000&mimetype=application/font-woff'
                },
                {
                    test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    loader: 'file-loader'
                },
                {
                    test: /\.jpg|\.png|\.mp3/,
                    loader: 'file-loader'
                }
            ]
        },
        resolveLoader: {
            root: path.join( __dirname, 'node_modules' )
        }
    }, options.overrides );

    config.module.loaders = _.union( config.module.loaders, options.loaders );
    config.plugins = _.union( config.plugins, options.plugins );

    return config;
};