

let parags = document.querySelectorAll('.answer');
let btns = document.querySelectorAll('button');
let flechas = document.querySelectorAll('.flecha');
let btnText = document.querySelectorAll('.text-bold');

for(let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', () => {
        if(parags[i].style.display === 'none') {
            parags[i].style.display = 'flex';
            flechas[i].style.transform = 'rotate(180deg)';
            btnText[i].style.fontWeight = 'bolder';
            btnText[i].style.fontSize = '1rem';

        }
        else {
            parags[i].style.display = 'none';
            flechas[i].style.transform = 'rotate(0deg)';
            btnText[i].style.fontWeight = '400';
            btnText[i].style.fontSize = '0.75rem';
        }
    });
}