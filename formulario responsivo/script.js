var email = document.getElementById("email");
var pass = document.getElementById("password");

email.addEventListener("focus", () => {
  email.style.borderColor = "#7fffd4";
});
email.addEventListener("blur", () => {
  email.style.borderColor = "aliceblue";
});
pass.addEventListener("focus", () => {
  pass.style.borderColor = "#7fffd4";
});
pass.addEventListener("blur", () => {
  pass.style.borderColor = "aliceblue";
});
console.log(email);
