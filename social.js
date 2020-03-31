//Facebook social media button rollover swap
function mouseOverImageFacebook() {
  document.getElementById("facebookBtn").src = "img/facebook-hover.png";
}

function mouseOutImageFacebook() {
  document.getElementById("facebookBtn").src = "img/facebook.png";
}

//Instagram social media button rollover swap
function mouseOverImageInstagram() {
  document.getElementById("instagramBtn").src = "img/instagram-hover.png";
}

function mouseOutImageInstagram() {
  document.getElementById("instagramBtn").src = "img/instagram.png";
}

//Linkedin social media button rollover swap
function mouseOverImageLinkedin() {
  document.getElementById("linkedinBtn").src = "img/linkedin-hover.png";
}

function mouseOutImageLinkedin() {
  document.getElementById("linkedinBtn").src = "img/linkedin.png";
}


//Pinterest social media rollover swap
function mouseOverImagePinterest() {
  document.getElementById("pinterestBtn").src = "img/pinterest-hover.png";
}

function mouseOutImagePinterest() {
  document.getElementById("pinterestBtn").src = "img/pinterest.png";
}

//Snapchat social media rollover swap
function mouseOverImageSnapchat() {
  document.getElementById("snapchatBtn").src = "img/snapchat-hover.png";
}

function mouseOutImageSnapchat() {
  document.getElementById("snapchatBtn").src = "img/snapchat.png";
}

//Twitter social media rollover swap
function mouseOverImageTwitter() {
  document.getElementById("twitterBtn").src = "img/twitter-hover.png";
}

function mouseOutImageTwitter() {
  document.getElementById("twitterBtn").src = "img/twitter.png";
}

//JS function for when user submits their details in contact form, it changes page title and heading to say thanks, and pulls their name from the contact form for a personal touch
      function thankYou(){
      
      document.title = "Thank you! | YLA";
      
      var Name = document.getElementById("name");
      
      document.getElementById("greeting").innerHTML = "Thanks for your message " + Name.value + "!";
      
      document.getElementById("form-content").innerHTML = "We will be in touch with you soon. Have a great day!";
      }
     



//JS function that we wrote for our 'poll' buttons. On clicking 'Vote' an alert pop up box appears in the browser to thank the user for their vote - so polite :D
function votethanks(){

alert('Thanks for your vote lass!');
}

  
