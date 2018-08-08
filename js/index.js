const display = document.querySelector('.calculator .display');

document.querySelectorAll('.numbers button')
  .forEach( btn => btn.addEventListener('click', numClick));

let operator = document.querySelectorAll('.operators button');
operator.forEach( btn => btn.addEventListener('click', operClick));

function numClick(event) {
    display.value += event.target.innerText;
  event.preventDefault();
}

function operClick(event) {
  if('+-*/'.includes(display.value.slice(-1))) {
        display.value = display.value.replace(/\D/g, event.target.innerText);
  } else {
     display.value += event.target.innerText;
  }
  event.preventDefault();
}

document.querySelector('.equal').addEventListener('click', function (event) {
  display.value = eval(display.value);
  event.preventDefault();
});

document.querySelector('.clear').addEventListener('click', function (event) {
  display.value = '';
  event.preventDefault();
});