// ADD OFFER
if (document.getElementById("offerForm")) {
  offerForm.onsubmit = function(e) {
    e.preventDefault();

    let offer = {
      title: title.value,
      price: price.value,
      country: country.value,
      expiry: Date.now() + 3*24*60*60*1000
    };

    let data = JSON.parse(localStorage.getItem("offers")) || [];
    data.push(offer);
    localStorage.setItem("offers", JSON.stringify(data));

    alert("Offer Added");
  };
}
// LOGIN SYSTEM
if (document.getElementById("loginForm")) {
  loginForm.onsubmit = function(e) {
    e.preventDefault();

    if (
      email.value === "Weblixbzw@gmail.com" &&
      password.value === "Arup@2004"
    ) {
      localStorage.setItem("isLoggedIn", "true");
      window.location = "dashboard.html";
    } else {
      alert("Wrong Login");
    }
  };
}
// LOGIN SYSTEM
if (document.getElementById("loginForm")) {
  loginForm.onsubmit = function(e) {
    e.preventDefault();

    if (
      email.value === "Weblixbzw@gmail.com" &&
      password.value === "Arup@2004"
    ) {
      localStorage.setItem("isLoggedIn", "true");
      window.location = "dashboard.html";
    } else {
      alert("Wrong Login");
    }
  };
    }
