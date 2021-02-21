//LAB 4 - JS ENCRYPTION
//Author: Bryan Hughes

window.addEventListener("load", function() {
  //A variable to hold the value of the password field in the HTML
  var preHashPass = document.forms.sha1form.sha1form__txt;
  //An empty string to hold the response
  var msg = "";
  //A variable to hold the area in the HTML that outputs the response
  var msgOut = document.getElementById('output');

  //Listen for the form to be submitted, pass the event(submit) as a param
  document.forms.sha1form.addEventListener("submit", function(event) {
    //Prevent the submit event from performing it's default action
    event.preventDefault();
    //Input validation
    if(preHashPass.value === "") {
      msg = "<h2>Enter a password</h2>";
      msgOut.innerHTML = msg;
    }else {
      var postHashPass = CryptoJS.MD5(preHashPass.value);
      msgOut.innerHTML = `<h2>Valid Password</h2>${postHashPass}`;
    }
    //Stop the form from sending regardless of the outcome
    return false;
  });
});