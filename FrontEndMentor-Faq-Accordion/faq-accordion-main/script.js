

var testes = document.getElementsByClassName("answer");
var plus = document.getElementsByClassName("plus");
var minus = document.getElementsByClassName("minus");

function openAccordion(index) {
    event.preventDefault();
    
    for(var i = 0; i < testes.length; i++) {
        if(i === index) {
            testes[i].classList.toggle("hide");
            minus[i].classList.toggle("hide");
            plus[i].classList.toggle("hide");
         
        } else {
            testes[i].classList.add("hide");

            minus[i].classList.add("hide");
            plus[i].classList.remove("hide");
    
        }
    }
    console.log(testes);

}
