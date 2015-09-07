export default function( $state, Authentication ) {
    'ngInject';

    if ( !(Authentication.loggedIn) ) {
        $state.go( 'app.login' );
    }
}