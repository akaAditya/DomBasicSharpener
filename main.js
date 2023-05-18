// const ul = document.querySelector('.items');

// ul.firstElementChild.textContent= 'Hello'
// ul.firstElementChild.style.color = 'green'
// ul.children[1].textContent = 'Developers'
// ul.children[1].style.color = 'yellow'

// events for click

let button = document.querySelector('#my-form');
let fname = document.querySelector('#name');
let email = document.querySelector('#email');

button.addEventListener('click', (e) =>{
    e.preventDefault();
    console.log(fname.value, email.value);
});

// events for mouseOver

// let btn = document.querySelector('#btn');

// btn.addEventListener('mouseover', (e)=>{
//     e.preventDefault();
//     document.querySelector('#my-form').style.background='#ccc';
//     document.querySelector('body').classList.add('bg-dark');
// });

// events for mouseout

let btn = document.querySelector('#btn');

btn.addEventListener('mouseover', (e)=>{
    e.preventDefault();
    document.querySelector('#my-form').style.background='#ccc';
    document.querySelector('body').classList.add('bg-dark');
});