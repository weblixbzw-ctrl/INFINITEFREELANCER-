// SHOW OFFERS
if (document.getElementById("offers")) {
  let offers = JSON.parse(localStorage.getItem("offers")) || [];
  let now = Date.now();

  offers = offers.filter(o => o.expiry > now);

  offers.forEach(o => {
    offersDiv.innerHTML += `
      <div>
        <h3>${o.title}</h3>
        <p>$${o.price} | ${o.country}</p>
        <p>PayPal | Payoneer | Bank</p>
      </div>
    `;
  });
}
