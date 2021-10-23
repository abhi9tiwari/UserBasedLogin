function seterror(id, error) {
  element = document.getElementById(id);
  element.getElementsByClassName("formerror")[0].innerHTML = error;
}
function clearErrors() {
  errors = document.getElementsByClassName("formerror");
  for (let item of errors) {
    item.innerHTML = "";
  }
}

var form = document.getElementById("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  var value = document.getElementById("select1").value;
  clearErrors();
  var email = document.forms["myForm"]["femail"].value;
  var password = document.forms["myForm"]["fpass"].value;
  if(email.length == 0){
    seterror("email","* Please Enter Your Email");
  }
  else if (email.length > 50) {
    seterror("email", "* length of email is too long");
  } else if (password.length < 6 ) {
    seterror("pass", "* password should be atleast 6 characters");
  }else if(password.length > 16){
    seterror("pass", "* password should be less than 16 characters");
  }else if (value == "employee") {
    location.href = "/employee";
  } else if (value == "manager") {
    location.href = "/manager";
  } else if (value == "admin") {
    location.href = "/admin";
  }
});
