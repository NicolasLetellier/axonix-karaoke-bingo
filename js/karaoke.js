$(document).ready(function(){

  console.log("login.js on!");
  
  var loginButton = $("#login-button");

  loginButton.on("click", clickLoginButton);

  function clickLoginButton(event) {
    event.preventDefault();
    var email = $("#login-email-input").val();
    var password = $("#login-password-input").val();
    if (email === "axonix@test.com" && password === "test") {
      window.location.href="campaign.html";
    } else {
      $("#failed-login-alert").slideDown();
    }
  }

});