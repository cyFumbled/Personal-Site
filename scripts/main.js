"use strict";


const delayedElements = document.querySelectorAll("[class*='animation-delay']");

for (let i = 0; i < delayedElements.length; i++) {
    const delayduration = delayedElements[i].className.split(' ').find(element => element.startsWith('animation-delay')).split('-')[2];
    delayedElements[i].style["animation-delay"] = delayduration;
}