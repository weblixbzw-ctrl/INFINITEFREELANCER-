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
