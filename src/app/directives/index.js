import angular from 'angular';

import footer from './footer';
import navbar from './navbar';

export default angular
    .module( 'app.directives', [] )
    .directive( 'seedFooter', footer )
    .directive( 'seedNavbar', navbar )
    .name;