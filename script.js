const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const num = document.querySelector('.quantity-value');
let a = 0;
plus.addEventListener('click', function () {
  a++;
  num.innerHTML = a;
});
minus.addEventListener('click', function () {
  if (a > 0) {
    a--;
    num.innerHTML = a;
  }
});
const menu = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-links');
const close = document.querySelector('.nav-links img');
menu.addEventListener('click', function () {
  nav.classList.toggle('slide');
});
close.addEventListener('click', function () {
  nav.classList.remove('slide');
});
const mainImg = document.getElementById('MainImg');
const smallImg = document.getElementsByClassName('small-img');
smallImg[0].onclick = function () {
  mainImg.src = './images/image-product-1.jpg';
};
smallImg[1].onclick = function () {
  mainImg.src = './images/image-product-2.jpg';
};
smallImg[2].onclick = function () {
  mainImg.src = './images/image-product-3.jpg';
};
smallImg[3].onclick = function () {
  mainImg.src = './images/image-product-4.jpg';
};
const cart = document.getElementById('add-to-cart');
const amount = document.querySelector('.amount');

cart.addEventListener('click', function () {
  if (a > 0) {
    amount.innerHTML = a;
  }
  if (a == 0) {
    amount.classList.toggle('kosong');
  } else {
    amount.classList.remove('kosong');
  }
});
