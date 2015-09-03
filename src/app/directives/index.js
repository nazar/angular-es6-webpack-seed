import angular from 'angular';

import greeting from './greeting';

export default angular
    .module( 'app.directives', [] )
    .directive( 'greeting', greeting )
    .name;