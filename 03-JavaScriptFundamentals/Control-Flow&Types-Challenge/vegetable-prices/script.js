function handleChange(event) {
  const vegetable = event.target.value;
  const para = document.querySelector(".main-box__priceDisplay");
  let price;

  switch(vegetable) {
    case "potatoes":
    case "carrots":
      price = "£0.50";
      break;
    case "brocolli":
      price = "£1.20";
      break;
    case "cabbage":
      price = "£0.20";
      break;
    case "asparagus":
      price = "£2.20";
      break;
  }
  para.textContent =`Price per kilo: ${price}`;
}