import angular from 'angular';

import ApplicationController from './application';

import AuthenticationController from './authentication';
import HomeController from './home';
import LoginController from './login';
import MyProfileController from './myProfile';
import Page1Controller from './page1';
import Page2Controller from './page2';

export default angular
    .module( 'app.controllers', [] )
    .controller( 'ApplicationController', ApplicationController )
    .controller( 'AuthenticationController', AuthenticationController )
    .controller( 'HomeController', HomeController )
    .controller( 'LoginController', LoginController )
    .controller( 'MyProfileController', MyProfileController )
    .controller( 'Page1Controller', Page1Controller )
    .controller( 'Page2Controller', Page2Controller )
    .name;