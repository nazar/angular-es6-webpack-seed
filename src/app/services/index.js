import angular from 'angular';

import auth from './auth';

export default angular
    .module( 'app.services', [] )
    .service( 'Authentication', auth )
    .name;