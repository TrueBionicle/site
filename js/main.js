"use strict";

const readMore = document.querySelectorAll('.read-more');

function showContent () {
    readMore.forEach(item => {
        item.addEventListener('click', (e) => {
            let target = e.target;
            target.previousElementSibling.classList.toggle("content--state--height");
            target.classList.toggle("read-more--state-transform");

            if(target.textContent == "Скрыть") {
                target.classList.contains("read-more--text--true")? target.textContent ="Читать далее" : target.textContent = "Показать всё";
            } else {
                target.textContent = "Скрыть";
            } 
        });
    });
}

showContent();

