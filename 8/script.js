let ask = true;
let result = undefined;
let day = Number(prompt("Please enter the day number:"));

switch (day) {
  case 1:
    result = "Saturday";
    break;
  case 2:
    result = "Sunday";
    break;
  case 3:
    result = "Monday";
    break;
  case 4:
    result = "Tuesday";
    break;
  case 5:
    result = "Wednsday";
    break;
  case 6:
    result = "Thursday";
    break;
  case 7:
    result = "Friday";
    break;

  default:
    result = "invalid";
    break;
}

alert(result);
