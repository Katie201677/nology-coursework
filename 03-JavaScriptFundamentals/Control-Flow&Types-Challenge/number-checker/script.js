function handleNumberCheck(event) {
  const num = event.target.value;

  if (num >= 0) {
    alert("positive");
  } else {
    alert("negative");
  }
}

let num1;
let num2;
let num3;

function checkGreatest(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else {
    return num3;
  }
}