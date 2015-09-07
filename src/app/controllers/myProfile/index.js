import ngImg from './images/angular.png';

export default function( $scope, $state, Authentication ) {
    'ngInject';

    $scope.ngImg = ngImg;

    $scope.logout = function() {
        Authentication.logOut();
        $state.go( 'app.home' );
    };

}