'use strict';

const call = document.querySelectorAll(".social__call");
const callBack = document.querySelectorAll(".social__chat");
const modal = document.querySelector(".modal");
const modalFeedBack = document.querySelector(".modal--feedback");
const modalCallBack = document.querySelector(".modal--callback");
const closeSelector = document.querySelectorAll('.close');

function showModal(target, modal, close, className) {
    target.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.classList.add(className);
        });
    });   
    close.forEach(item => {
        item.addEventListener('click', (e) => {
            modal.classList.remove('modal--show');
        });
    });   
}

showModal(call, modalCallBack, closeSelector, 'modal--show');
showModal(callBack, modalFeedBack ,closeSelector, 'modal--show');


