
//signup function//
function signup(){
    event.preventDefault();
    console.log('working');

    var email= document.getElementsByClassName('email').value;
    var username= document.getElementsByClassName('username').value;
    var password= document.getElementsByClassName('password').value;

    var user ={
        email: email,
        username: username,
        password: password, 
    };

//local storage//
    var json = JSON.stringify(user);
    localStorage.setItem(username, json);
    console.log('user added');




}








