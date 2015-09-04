import angular from 'angular';

import ApplicationController from './application';

import HomeController from './home';
import Page1Controller from './page1';
import Page2Controller from './page2';

export default angular
    .module( 'app.controllers', [] )
    .controller( 'ApplicationController', ApplicationController )
    .controller( 'Page1Controller', Page1Controller )
    .controller( 'Page2Controller', Page2Controller )
    .controller( 'HomeController', HomeController )
    .name;