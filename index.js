

function animateCard() {
    var card = document.querySelector('.card');
    card.classList.add('clicked');
    setTimeout(function() {
      card.classList.remove('clicked');
    }, 300);
}

document.addEventListener("DOMContentLoaded", function() {
  var gtElement = document.querySelector('.gt');
  gtElement.classList.add('show');
});

document.addEventListener("DOMContentLoaded", function() {
  var topElement = document.querySelector('.top');
  topElement.classList.add('show');
});

document.addEventListener("DOMContentLoaded", function() {
  var lopuxElement = document.querySelector('.lopux');
  lopuxElement.classList.add('show');
});

function animateCard1() {
  var card = document.querySelector('.card');
  card.classList.add('clicked');
  setTimeout(function() {
    card.classList.remove('clicked');
  }, 300);
}

