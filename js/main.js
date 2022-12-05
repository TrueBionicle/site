"use strict";

const readMore = document.querySelectorAll('.read-more');

function showContent () {
    readMore.forEach(item => {
        item.addEventListener('click', (e) => {
            if(window.matchMedia("(min-width: 768px)").matches) {
                if(e.target.classList.contains("hide")) {
                    e.target.previousElementSibling.style.height = "auto";
                    e.target.textContent ="Скрыть";
                    e.target.classList.remove('hide');
                    e.target.classList.add('show');
                } else {
                    e.target.previousElementSibling.style.height = "160px";
                    e.target.textContent ="Показать всё";
                    e.target.classList.add('hide');
                    e.target.classList.remove('show');
                }
            }  else {
                if(e.target.classList.contains("hide")) {
                    e.target.previousElementSibling.style.height = "auto";
                    e.target.textContent ="Скрыть";
                    e.target.classList.remove('hide');
                    e.target.classList.add('show');
                } else {
                    e.target.previousElementSibling.style.height = "88px";
                    e.target.textContent ="Читать далее";
                    e.target.classList.add('hide');
                    e.target.classList.remove('show');
                }
            }
        });
    });
}

showContent();

