const container = document.querySelectors("img");


function checkWith() {
   
    if(window.innerWidth > 859) {
        container.style.display='none';
    }
    else if(window.innerWidth < 859) {
        container.style.display='block';
    }
    else {
        container.style.display='none';
    }
}

console.log(window.innerWidth)

document.onload = checkWith;
window.onresize = checkWith;