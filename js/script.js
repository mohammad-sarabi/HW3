const spinner = document.querySelector('.spinner-grow');
const main = document.querySelector('.main');

setTimeout(function () {
    spinner.style.display = 'none';
    main.style.display = 'block';
}, 2000)
// var myVar;

// function myFunction() {
//   myVar = setTimeout(showPage, 3000);
// }

// function showPage() {
//   document.getElementById("minr").style.display = "none";
//   document.getElementById("myDiv").style.display = "block";
// }