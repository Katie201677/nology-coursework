function handleChange(event) {
  const vegetable = event.target.value;
  const para = document.querySelector(".priceDisplay");
  let price;

  switch(vegetable) {
    case "potatoes":
    case "carrots":
      price = "£0.50 per kilo";
      break;
    case "brocolli":
      price = "£1.20 per kilo";
      break;
    case "cabbage":
      price = "£0.20 per kilo";
      break;
    case "asparagus":
      price = "£2.20 per kilo";
      break;
  }
  para.textContent =`${vegetable} price is ${price}`;
}