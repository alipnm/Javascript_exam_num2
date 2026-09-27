let ask = true;

while (ask) {
  try {
    var num = Number(prompt("Please enter a number"));
    if (!Number.isInteger(num)) {
      throw new TypeError(
        "Please enter an integer, not a float or anything else.",
      );
    }
    ask = false;
  } catch (error) {
    alert(error);
  }
}

alert(num % 2 == 0 ? "This number is even." : "This number is odd.");
