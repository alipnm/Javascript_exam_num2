let myname = "Ali";
console.log(myname);
console.log("This is defined with let, so it could change, see I change it:");
myname = "Reza";
console.log(myname);
console.log("But if you define sth with const, it won't change:");
const city = "Tehran";
console.log(city);
console.log("This is defined with const, and when I change it, it says error.");
try {
  city = "Baku";
} catch (error) {
  console.error(error);
}
console.log("See! it says error.");
