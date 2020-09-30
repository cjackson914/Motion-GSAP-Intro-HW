import {gsap} from "gsap";

import {triangleYellowAnimation} from "./triangleYellow.js"



const mainTL = gsap.timeline({paused:true});

mainTL.add(triangleYellowAnimation())
        .play();