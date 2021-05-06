function daysToWeekend() {
  switch(new Date().getDay()) {
    case 0:
      alert("it's the weekend");
      break;
    case 1:
      alert("only 4 days to go");
      break;
    case 2:
      alert("only 3 days to go");
      break;
    case 3:
      alert("only 2 days to go");
      break;
    case 4:
      alert("only 1 day to go");
      break;
    case 5:
      alert("0 days to go");
      break;
    case 6:
      alert("it's the weekend");
      break;
    }
}