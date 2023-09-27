
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
var access="93bccf21e00692f2ca8c6938ae0b90294a8d66851229c143d9526118676a8d76"
var fileInput= document.getElementById('identifyform')
var submitbutton=document.getElementById('submitbutton')
submitbutton.addEventListener('click', function(event) {
event.preventDefault()
var myHeaders = new Headers();
	myHeaders.append("accessKey", access);
	
	var formdata = new FormData();
	formdata.append("image", fileInput.files[0]);
	
	var requestOptions = {
	  method: 'POST',
	  headers: myHeaders,
	  body: formdata,
	  redirect: 'follow'
	};
	
	fetch("https://api.plantcaregarden.com/v1/plant/identify", requestOptions)
	  .then(response => response.text())
	  .then(result => console.log(result))
	  .catch(error => console.log('error', error));
}
)






