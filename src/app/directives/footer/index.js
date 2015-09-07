import './style.styl';
import template from 'directives/footer/template.html';

export default function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: template
    };
}

