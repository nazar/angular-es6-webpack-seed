//load CSS assets first
require( 'assets/main.css' );

import angular from 'angular';
import angularUIRouter from 'angular-ui-router';

import routes from './routes';

export default angular.module( 'app', [
    angularUIRouter
] )
    .config( routes );