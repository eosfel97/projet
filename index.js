let input = document.getElementsByTagName("span");
let price = document.querySelectorAll(".price");
let number = document.querySelectorAll(".number");
let total = document.querySelectorAll(".total");
// let totalg = document.querySelector(".totalg");

// console.log(input);
// console.log(price);
// console.log(number);
// console.log(totalg);
for (let i = 0; i < input.length; i++) {
  input[i].addEventListener("click", function () {
    // console.log(number[i].value);
    // console.log(price[i].textContent);
    // console.log(total[i].textContent);
    total[i].textContent = number[i].value * price[i].textContent + "€";
    var totalg = 0;
    $(".total").each(function () {
      totalg += parseFloat($(this).text());
    });
    $(".totalg").html(totalg + "€");
  });
}
