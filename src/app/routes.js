import homeTemplate from 'controllers/home/home.html';

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
            templateUrl: homeTemplate,
            controller: 'HomeController'
        } );
}
