import {gsap} from "gsap";

import {triangleYellowAnimation} from "./triangleYellow.js"
import {triangleOrangeAnimation} from "./triangleOrange.js"
import {rectangleBlueAnimation} from "./rectangleBlue.js"

const mainTL = gsap.timeline({paused:true});

mainTL.add(triangleYellowAnimation())
        .add(triangleOrangeAnimation())
        .add(rectangleBlueAnimation())
        .play();