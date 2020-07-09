const spinner = document.querySelector('.spinner-grow');
const main = document.querySelector('.main');

setTimeout(function () {
    spinner.style.display = 'none';
    main.style.display = 'block';
}, 1500)
