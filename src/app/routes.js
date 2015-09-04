import applicationTemplate from 'controllers/application/template.html';

import homeTemplate from 'controllers/home/template.html';
import page1Template from 'controllers/page1/template.html';
import page2Template from 'controllers/page2/template.html';

export default function ( $stateProvider, $urlRouterProvider, $locationProvider ) {
    'ngInject';

    $locationProvider.html5Mode( {
        enabled: true,
        requireBase: false
    } );

    $urlRouterProvider.otherwise( '/' );

    $stateProvider
        .state( 'app', {
            url: '',
            abstract: true,
            templateUrl: applicationTemplate,
            controller: 'ApplicationController'
        } )
        .state( 'app.home', {
            url: '/',
            templateUrl: homeTemplate,
            controller: 'HomeController'
        } )
        .state( 'app.page1', {
            url: '/page1',
            templateUrl: page1Template,
            controller: 'Page1Controller'
        } )
        .state( 'app.page2', {
            url: '/page2',
            templateUrl: page2Template,
            controller: 'Page2Controller'
        } );
}
