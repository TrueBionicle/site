'use strict';

const call = document.querySelectorAll(".social__call");
const callBack = document.querySelectorAll(".callback")
const modalFeedBack = document.querySelector(".modal--feedback");
const modalCallBack = document.querySelector(".modal--callback");
const closeModal = document.querySelectorAll('.close');


function showModal(target, modal, close, className) {
    target.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.classList.add(className);
        });
    });    
    close.forEach(item => {
        item.addEventListener('click', () => {
            modal.classList.remove(className);
        });
    });
}

showModal(call, modalCallBack, closeModal, 'modal--show');
showModal(callBack, modalFeedBack, closeModal, 'modal--show');
 

