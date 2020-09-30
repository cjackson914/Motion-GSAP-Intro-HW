import {gsap} from "gsap";
import {shapeSpeed} from "./animationSpeed.js"

export function lineNavy1Animation(){

    var tl = gsap.timeline();
    tl.from(".linenavy1",{duration: shapeSpeed, x: -1000, y: -100, alpha: 0});
    tl.to(".linenavy1",{duration: shapeSpeed, x: 300, y: -100});

    return tl;
}




// gsap.from(".linenavy1",{duration: timeOfAnimation, x: -1000, y: -100, alpha: 0});
// gsap.to(".linenavy1",{duration: timeOfAnimation, x: 300, y: -100});



