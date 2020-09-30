import {gsap} from "gsap";
import {shapeSpeed} from "./animationSpeed.js"

export function triangleOrangeAnimation(){

    var tl = gsap.timeline();
    tl.from(".triangleOrange",{duration: shapeSpeed, x: 2000, y: -325, alpha: 0});
    tl.to(".triangleOrange",{duration: shapeSpeed, x: 350, y: -325});

    return tl;
}





// gsap.from(".triangleorange",{duration: timeOfAnimation, x: 2000, y: -325, alpha: 0});
// gsap.to(".triangleorange",{duration: timeOfAnimation, x: 350, y: -325});

