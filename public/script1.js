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
  var name = document.forms["myForm"]["fname"].value;
  var phone = document.forms["myForm"]["fphone"].value;
  var email = document.forms["myForm"]["femail"].value;
  var password = document.forms["myForm"]["fpass"].value;
  var cpassword = document.forms["myForm"]["fcpass"].value;
  if (name.length < 5) {
    seterror("name", "* length of name is too short");
  } else if (email.length > 50) {
    seterror("email", "* length of email is too long");
  } else if (phone.length != 10) {
    seterror("phone", "* length of phone should be 10 digits");
    returnval = false;
  } else if (password.length < 6) {
    seterror("pass", "* password should be atleast 6 characters");
  } else if (cpassword != password) {
    seterror("cpass", "* passwords should match");
    returnval = false;
  } else if (value == "employee") {
    location.href = "/employee";
  } else if (value == "manager") {
    location.href = "/manager";
  } else if (value == "admin") {
    location.href = "/admin";
  }
});
