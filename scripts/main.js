
let myHeading = document.querySelector("h1");

async function fadeElement( element, direction, initalPause ) {
    let opacity = 0;
    element.style.opacity = opacity;
    await new Promise(r => setTimeout(r, initalPause));
    while (opacity < 1) {
        element.style.opacity = opacity;
        opacity = opacity + 0.01;
        await new Promise(r => setTimeout(r, 10));
    }

} 

let fadingElements = document.getElementsByClassName("downwards-fade");
for (const element of fadingElements) {
    fadeElement( element, "down", 1000)
}
