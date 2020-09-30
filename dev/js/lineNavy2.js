import {gsap} from "gsap";
import {shapeSpeed} from "./animationSpeed.js"

export function lineNavy2Animation(){

    var tl = gsap.timeline();
    tl.from(".linenavy2",{duration: shapeSpeed, x: -1000, y: -450, alpha: 0});
    tl.to(".linenavy2",{duration: shapeSpeed, x: 200, y: -450});

    return tl;
}

// gsap.from(".linenavy2",{duration: timeOfAnimation, x: -1000, y: -450, alpha: 0});
// gsap.to(".linenavy2",{duration: timeOfAnimation, x: 200, y: -450});