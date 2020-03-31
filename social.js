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

//Modal for quiz//
var modal = document.getElementById("mymodal");

var btn = document.getElementById("votebutton");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//JS function that we wrote for our 'poll' buttons. On clicking 'Vote' an alert pop up box appears in the browser to thank the user for their vote - so polite :D
function votethanks(){

alert('Thanks for your vote lass!');
}

  
