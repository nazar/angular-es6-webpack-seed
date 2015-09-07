export default function( $scope, $state, Authentication ) {
    'ngInject';

    $scope.login = function() {
        Authentication.logIn();
        $state.go( 'app.my.profile' );
    };

    $scope.isLoggedIn = function() {
        return Authentication.loggedIn;
    };

}