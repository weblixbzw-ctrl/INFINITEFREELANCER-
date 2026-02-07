// LOGIN SYSTEM

const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.onsubmit = function (e) {
    e.preventDefault();

    const email = document.getElementById("email");
    const password = document.getElementById("password");

    if (
      email.value === "weblixbz@gmail.com" &&
      password.value === "Arup@2004"
    ) {
      window.location.href = "dashboard.html";
    } else {
      alert("Wrong Login");
    }
  };
}
