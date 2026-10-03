let matris = [
  ["*", "*", "*"],
  ["*", "*", "*"],
  ["*", "*", "*"],
];

for (const row of matris) {
  var result = "";
  for (const column of row) {
    result += `${column} `;
  }
  console.log(result.trim());
}
