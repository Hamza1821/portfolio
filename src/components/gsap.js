import gsap from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const tl = gsap.timeline();


// Register ScrollTrigger
export const st=gsap.registerPlugin(ScrollTrigger);
