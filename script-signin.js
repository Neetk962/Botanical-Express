
gapi.load('auth2',function() {
    gapi.auth2.init( {
        client_id:'468175261734-l5d7dpqkluri3lnerdbcr5a22o25og4p.apps.googleusercontent.com'
    });
});

function onSignIn(googleUser) {
    const profile= googleUser.getBasicProfile();
    const userData={
        id:profile.getId(),
        name:profile.getName(),
        email:profile.getEmail(),
        imageUrl:profile.getImageUrl(),
    };


localStorage.setItem('userData' JSON.stringify(userData));

const userData = JSON.parse(localStorage.getItem('userData'));

if(userData){

}




}