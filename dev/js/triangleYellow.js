import {gsap} from "gsap";
import {shapeSpeed} from "./animationSpeed.js"

export function triangleYellowAnimation(){

    var tl = gsap.timeline();
    tl.from(".triangleyellow",{duration: shapeSpeed, x: -1000, y: -1000, alpha: 0});
    tl.to(".triangleyellow",{duration: shapeSpeed, x: 200, y: 300});

    return tl;
}


// gsap.from(".triangleyellow",{duration: timeOfAnimation, x: -1000, y: -1000, alpha: 0});
// gsap.to(".triangleyellow",{duration: timeOfAnimation, x: 200, y: 300});