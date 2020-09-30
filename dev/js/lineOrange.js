import {gsap} from "gsap";
import {shapeSpeed} from "./animationSpeed.js"

export function lineOrangeAnimation(){

    var tl = gsap.timeline();
    tl.from(".lineOrange",{duration: shapeSpeed, x: 500, y: 2000, alpha: 0});
    tl.to(".lineOrange",{duration: shapeSpeed, x: 500, y: -250});

    return tl;
}


// gsap.from(".lineorange",{duration: timeOfAnimation, x: 500, y: 2000, alpha: 0});
// gsap.to(".lineorange",{duration: timeOfAnimation, x: 500, y: -250});