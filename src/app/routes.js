export default function ( $stateProvider, $urlRouterProvider, $locationProvider ) {
    'ngInject';

    $locationProvider.html5Mode( {
        enabled: true,
        requireBase: false
    } );

    $urlRouterProvider.otherwise( '/' );

    $stateProvider
        .state( 'home', {
            url: '/',
            templateUrl: require( 'templates/home.html' ),
            controller: require( 'controllers/homeController' )
        } );
}
