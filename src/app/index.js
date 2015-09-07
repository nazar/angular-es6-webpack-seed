require( 'assets/main.css' );

import angular from 'angular';
import angularUIRouter from 'angular-ui-router';

import routes from './routes';

import controllers from './controllers';
import directives from './directives';
import services from './services';

export default angular
    .module( 'app', [
        'mgcrea.ngStrap',
        angularUIRouter,

        controllers,
        directives,
        services
    ] )
    .config( routes );