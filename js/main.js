let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let sum = document.querySelector("#sum");
let sub = document.querySelector("#sub");
let mul = document.querySelector("#mul");
let div = document.querySelector("#div");
console.log(sum);
console.log(sub);
console.log(mul);
console.log(div);

sum.addEventListener("click", function () {
  document.querySelector("h1").innerHTML =
    Number(num1.value) + Number(num2.value);
});
sub.addEventListener("click", function () {
  document.querySelector("h1").innerHTML =
    Number(num1.value) - Number(num2.value);
});
mul.addEventListener("click", function () {
  document.querySelector("h1").innerHTML =
    Number(num1.value) * Number(num2.value);
});
div.addEventListener("click", function () {
  document.querySelector("h1").innerHTML =
    Number(num1.value) / Number(num2.value);
});
