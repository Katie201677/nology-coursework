function calculateYearsUntilRetirement(event) {
  const currentAge = event.target.value;
  const yearsRemaining = 65 - currentAge;
  alert(yearsRemaining);
}

function getGreetingInFrench(event) {
  const greeting = event.target.value;

  if (greeting === "hello") {
    alert("bonjour");
  } else if (greeting === "goodbye") {
    alert("au revoir");
  } else {
    alert("not recognised")
  }
}

function calculateSeconds(event) {
  const minutes = event.target.value;
  const seconds = minutes * 60;
  alert(seconds);
}