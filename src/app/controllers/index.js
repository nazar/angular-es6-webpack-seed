import angular from 'angular';

import HomeController from './home';

export default angular
    .module( 'app.controllers', [] )
    .controller( 'HomeController', HomeController )
    .name;