"use strict";


const delayedElements = document.querySelectorAll("[class*='animation-delay']");

for (let i = 0; i < delayedElements.length; i++) {
    const delayduration = delayedElements[i].className.split(' ').find(element => element.startsWith('animation-delay')).split('-')[2];
    delayedElements[i].style["animation-delay"] = delayduration;
}


const backgroundColoredElements = document.querySelectorAll("[class*='backgroundColor']");

for (let i = 0; i < backgroundColoredElements.length; i++) {
    const backgroundColor = backgroundColoredElements[i].className.split(' ').find(element => element.startsWith('backgroundColor')).split('-')[1];
    delayedElements[i].style["background-color"] = backgroundColor;
}

const basicColoredElements = document.querySelectorAll("[class*='basicColor']");

for (let i = 0; i <basicColoredElements.length; i++) {
    const basicColor = basicColoredElements[i].className.split(' ').find(element => element.startsWith('basicColor')).split('-')[1];
    basicColoredElements[i].style["color"] = basicColor;
}