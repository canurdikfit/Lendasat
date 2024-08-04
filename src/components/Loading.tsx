import { gsap } from "gsap";
import Background from "./../assets/imgs/culangex_loading_background.webp";
import Logo from "./../assets/imgs/culangex.png";
import Flower from "./../assets/imgs/flower_side.webp";
import Button from "./../assets/imgs/buttons/Explore_button.svg";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Loading() {
  useGSAP(() => {
    gsap.fromTo(
      "#culangex",
      {
        scale: 0,
      },
      {
        scale: 0.7,
        duration: 2.5,
        ease: "sine",
      }
    );

    gsap.from("#flower_vase", {
      x: 500,
      y: 500,
      delay: 2,
      duration: 1.5,
      ease: "circ",
    });

    gsap.fromTo(
      "#culangex",
      {
        scale: 0.7,
      },
      {
        scale: 1,
        delay: 4,
        duration: 3,
        ease: "sine.in",
      }
    );

    gsap.from("#button", {
      rotateZ: 45,
      rotateY: 45,
      scale: 0,
      delay: 7,
      duration: 1.5,
      ease: "bounce",
    });
  }, []);

  const onHoverEnter = () => {
    gsap.to("#button", {
      scale: 1.1,
      duration: 1.1,
    });
  };

  const onHoverLeave = () => {
    gsap.to("#button", {
      scale: 1.0,
      duration: 1.1,
    });
  };

  const onButtonClicked = () => {
    gsap.to("#culangex", {
      css: {
        opacity: 5,
      },
      duration: 1.3,
      ease: "power3",
    });
    gsap.to("#loader", {
      css: {
        opacity: 0,
      },
      duration: 2,
      ease: "power3",
    });
    gsap.to("#loader", {
      css: {
        position: "relative",
      },
      delay: 2,
    });
  };

  return (
    <section
      id="loader"
      className="h-full w-full fixed place-items-center flex justify-center z-[999] overflow-hidden opacity-100 bg-black"
    >
      <div className="absolute z-40 top-0 w-full bg-gradient-to-b from-black to-black/0 h-[300px]" />
      <div className="absolute z-40 bottom-0 w-full bg-gradient-to-b from-black/0 to-black h-[300px]" />
      <div className="absolute z-50 flex flex-col gap-5 md:gap-7 items-center justify-center">
        <img
          src={Logo}
          alt="Culangex Logo"
          id="culangex"
          className="h-auto w-40 md:w-64 shrink-0"
        />
        <button
          id="button"
          className="bg-none outline-none border-none max-w-[110px] md:max-w-[150px] shrink-0"
          onMouseEnter={onHoverEnter}
          onMouseLeave={onHoverLeave}
          onClick={onButtonClicked}
        >
          <img
            src={Button}
            alt="Explore"
            className="h-auto w-full object-contain object-center"
          />
        </button>
      </div>
      <div className="absolute z-30 h-full w-full">
        <img
          src={Background}
          alt="Culangex Loading Screen"
          className="object-cover h-full w-full lg:object-center md:object-right-bottom"
        />
        <img
          src={Flower}
          alt="Flower Vase"
          id="flower_vase"
          className="absolute bottom-0 max-w-2xl md:max-w-4xl right-0"
        />
      </div>
    </section>
  );
}
