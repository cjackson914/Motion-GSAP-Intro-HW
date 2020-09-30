import {gsap} from "gsap";
import {shapeSpeed} from "./animationSpeed.js"

export function rectangleBlueAnimation(){

    var tl = gsap.timeline();
    tl.from(".rectangleblue",{duration: shapeSpeed, x: 300, y: -1000, alpha: 0});
    tl.to(".rectangleblue",{duration: shapeSpeed, x: 300, y: -50});

    return tl;
}





// gsap.from(".rectangleblue",{duration: timeOfAnimation, x: 300, y: -1000, alpha: 0});
// gsap.to(".rectangleblue",{duration: timeOfAnimation, x: 300, y: -50});