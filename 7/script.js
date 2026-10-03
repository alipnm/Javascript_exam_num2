let ask = true;
let score = undefined;

while (ask) {
  try {
    score = Number(prompt("Please enter yor score (between 0 to 100)"));
    if (score < 0 || score > 100) {
      throw new RangeError("Your number should be between 0 to 100.");
    } else if (score % 0.25 !== 0) {
      throw new Error(
        "Invalid score. Your score should be dividable to 0.25 of scores.",
      );
    } else {
      ask = false;
      console.log(score);
    }
  } catch (err) {
    alert(err);
  }
}

if (score < 20) {
  alert("f");
} else if (score < 40) {
  alert("d");
} else if (score < 60) {
  alert("c");
} else if (score < 80) {
  alert("b");
} else {
  alert("a");
}
