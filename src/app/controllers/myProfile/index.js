export default function( $scope, $state, Authentication ) {
    'ngInject';

    $scope.logout = function() {
        Authentication.logOut();
        $state.go( 'app.home' );
    };

}