require( 'assets/main.css' );

import angular from 'angular';
import angularUIRouter from 'angular-ui-router';

import routes from './routes';

import controllers from './controllers';
import directives from './directives';

export default angular
    .module( 'app', [
        angularUIRouter,
        controllers,
        directives
    ] )
    .config( routes );