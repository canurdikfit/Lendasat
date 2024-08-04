import { useGSAP } from "@gsap/react";
import Culangex from "./../assets/imgs/culangex.png";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  useGSAP(() => {
    gsap.to("#logo_resize", {
      scale: 0.35,
      translateY: -90,
      scrollTrigger: {
        trigger: "#logo_resize",
        start: "+=0",
        end: "+=150",
        scrub: true,
      },
      ease: "circ",
    });
    gsap.to("#back_shadow", {
      css: {
        visibility: "visible",
      },
      scrollTrigger: {
        trigger: "#logo_resize",
        start: "top top",
        end: "+=250",
        scrub: true,
      },
      ease: "sine",
    });
  }, []);
  return (
    <nav className="fixed top-0 inset-x-0 md:pt-16 pt-12 flex items-center justify-center z-50">
      <div
        id="back_shadow"
        className="absolute z-10 top-0 w-full bg-gradient-to-b from-black to-black/0 h-[300px] invisible"
      />
      <div>
        <img
          src={Culangex}
          alt="Culangex Logo"
          id="logo_resize"
          className="w-44 scale-75 h-auto relative z-20"
        />
      </div>
    </nav>
  );
}
