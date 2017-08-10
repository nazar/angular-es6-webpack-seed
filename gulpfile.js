var path = require( 'path' );
var gulp = require( 'gulp' );
var gutil = require( 'gulp-util' );
var webpack = require( 'webpack' );
var gulpWebpack = require( 'gulp-webpack' );
var WebpackDevServer = require( 'webpack-dev-server' );
var stylus = require( 'gulp-stylus' );
var clean = require( 'gulp-clean' );
var runSequence = require( 'run-sequence' );

function handleError( task ) {
    return function ( err ) {
        this.emit( 'end' );
        gutil.log( 'Error handler for', task, err.toString() );
    };
}

// The development server (the recommended option for development)
gulp.task( 'default', [ 'webpack-dev-server', 'stylus:compile' ] );

gulp.task( 'webpack-dev-server', function ( callback ) {
    var config = Object.create( require( './webpack.dev.js' ) );

    // Start a webpack-dev-server
    new WebpackDevServer( webpack( config ), {
        contentBase: path.join( __dirname, 'build' ),
        publicPath: config.output.publicPath,
        hot: true,
        historyApiFallback: true,
        stats: {
            colors: true
        }
    } ).listen( 8080, '0.0.0.0', function ( err ) {
        if ( err ) {
            throw new gutil.PluginError( 'webpack-dev-server', err );
        }
        gutil.log( '[webpack-dev-server]', 'http://192.168.30.25:8080' );
        callback();
    } );

    //setup stylus watcher
    gulp.watch( [ 'src/assets/stylus/*.styl', 'src/assets/stylus/**/*.styl' ], [ 'stylus:compile' ] );
} );

gulp.task( 'stylus:compile', function () {
    return gulp.src( './src/assets/stylus/main.styl' )
        .pipe( stylus().on( 'error', handleError( 'stylus:compile' ) ) )
        .pipe( gulp.dest( './src/assets' ) );
} );

gulp.task( 'clean:build', function () {
    return gulp.src( 'build/*', { read: false } )
        .pipe( clean() );
} );

gulp.task( 'build:cp:index', function () {
    return gulp.src( [
        './src/assets/favicon.png'
    ] )
        .pipe( gulp.dest( 'build/' ) );
} );

gulp.task( 'build:webpack', function () {
    return gulp.src( 'src/app/index.js' )
        .pipe( gulpWebpack( require( './webpack.prod.js' ), webpack ) )
        .pipe( gulp.dest( 'build/' ) );
} );


gulp.task( 'build', function ( cb ) {
    runSequence(
        'clean:build',
        [ 'stylus:compile', 'build:cp:index' ],
        'build:webpack',
        cb
    );
} );
