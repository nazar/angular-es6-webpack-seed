import './greeting.styl';
import template from 'directives/greeting/greeting.html';

export default function() {
    return {
        restrict: 'E',
        templateUrl: template,
        controller: function( $scope ) {
            'ngInject';
            $scope.greeting = 'oh hai!!';
        }
    };
}

