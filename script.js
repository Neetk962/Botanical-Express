
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



//adding 1st API for plant identification 
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
//adding GIPHY API for animation
var GIPHY_API_KEY='7hF62x7u8Yt0vktjZWs4vGkvXJsaMCvM';
var gif_container=document.getElementById('gif-container');
var GIPHY_BASE_URL=("https://api.giphy.com/v1/gifs/");


    async function fetchPlantGifs() {
        try {
          const response = await fetch(`${GIPHY_BASE_URL}xT9DPhySvCRg3nuTqU?api_key=${GIPHY_API_KEY}`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          displayGifs(data.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
      
      // Function to display GIFs in the container
      function displayGifs(gifData) {
        gif_container.innerHTML = ''; // Clear the container
      
       
          const imgElement = document.createElement('img');
          imgElement.src = gifData.images.original.url;
          imgElement.alt = gifData.title;
          imgElement.classList.add('gif-image')
          gif_container.appendChild(imgElement);
        
      }
      
      // Call the function to fetch and display plant GIFs
      fetchPlantGifs();