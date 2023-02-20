// let count = 10;

 

//  function sayHello (firstName) {
//    count = 30;
//   console.log(count);


//    console.log(firstName);

//  }
//  sayHello('Oleg')

// console.log(count);

// let test = 'oleg';

// if (5 < 10) {
//   let test = 'correct'

//   console.log(test);
// }
// console.log(test);
// let i = 100;

// for (let i = 0; i < 10; i++){
//   console.log(i)
// }
// console.log(i);

// const happiButton = document.getElementById("btn-hapines");
// const sadButton = document.getElementById("btn-sadnes");
// const img = document.querySelector(".img");


// happiButton.addEventListener('click', function() {
//     img.style.display = 'inline';
//     happiButton.disabled = true;
//     sadButton.disabled = false;
// })

// sadButton.addEventListener('click', function() {
//     img.style.display = 'none';
//     happiButton.disabled = false;
//     sadButton.disabled = true;
//     })


// const imgEl = document.createElement('img');
// console.log(imgEl);
// imgEl.src = ''
// imgEl.alt = '';
// imgEl.width = '500';

// document.body.appendChild(imgEl);

const navItemEl = document.createElement('li');
 navItemEl.classList.add('site-nav__item');

const navLinkEl = document.createElement('a');
navLinkEl.classList.add('site-nav__link');
navLinkEl.textContent = 'кабінет';
navLinkEl.href = '/profil';

navItemEl.appendChild(navLinkEl);
console.log(navItemEl);

const navEl = document.querySelector('.site-nav');
// navEl.appendChild(navItemEl);

navEl.insertBefore(navItemEl, navEl.children[2]);









