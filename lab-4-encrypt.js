//LAB 4 - JS ENCRYPTION
window.addEventListener("load", function() {
  var preHashPass = document.forms.sha1form.sha1form__txt;
  var msg = "";
  var msgOut = document.getElementById('output');
  document.forms.sha1form.addEventListener("submit", function(event) {
    event.preventDefault();
    if(preHashPass.value === "") {
      msg = "<h2>Enter a password</h2>";
      msgOut.innerHTML = msg;
      alert("hello");
    }else {
      var postHashPass = CryptoJS.MD5(preHashPass.value);
      msgOut.innerHTML = `<h2>Valid Password</h2>${postHashPass}`;
    }
    return false;
  });
});