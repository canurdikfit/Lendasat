import AboutBackground from "./../assets/imgs/Night City.webp";
import Get_Now from "./../assets/imgs/buttons/get_now.svg";
import LightPool from "./../assets/imgs/light_pool.webp";
import LayerScale from "./../assets/imgs/layerScale-2.png";
import Aje from "./../assets/imgs/AjeCap.webp";
import Light from "./../assets/imgs/light.png";
import BlurredDrum from "./../assets/imgs/Drum.webp";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  useGSAP(() => {
    gsap.from("#blurredDrum", {
      translateX: -200,
      scrollTrigger: {
        trigger: "#blurredDrum",
        start: "top bottom",
        end: "top 15%",
        scrub: true,
      },
      ease: "power1.inOut",
    });

    gsap.from("#pool", {
      translateX: 200,
      scrollTrigger: {
        trigger: "#pool",
        start: "top bottom",
        end: "top 50%",
        scrub: true,
      },
    });

    gsap.from("#light", {
      opacity: 0,
      scrollTrigger: {
        trigger: "#light",
        start: "top 50%",
        end: "top 30%",
        scrub: true,
      },
    });

    gsap.from("#aje", {
      translateY: 200,
      scrollTrigger: {
        trigger: "#aje",
        start: "top bottom",
        end: "top 70%",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="relative overflow-visible min-h-[600px] xl:min-h-[1000px] flex items-center justify-center px-6 md:px-14 lg:px-20 pt-20 md:pt-0">
      <div className="absolute z-10 top-0 w-full bg-gradient-to-b from-black/85 to-black/0 h-[150px] md:h-[300px]" />

      <div className="absolute z-20 bg-black backdrop-blur h-full w-full opacity-55" />

      <img
        src={AboutBackground}
        alt="Banner Image"
        className="absolute h-full w-full object-cover object-center"
      />

      <div className="relative grid md:grid-cols-2 items-center">
        <div className="flex flex-col gap-5 relative z-40 md:order-last">
          <h2 className="text-left xl:text-[80px]">
            What Is <br className="hidden md:block" /> CulanGEX?
          </h2>
          <p className="max-w-md">
            Lorem ipsum dolor sit amet consectetur. Pharetra nisl vel praesent
            sit. Nisl lectus pharetra ut venenatis in gravida. Sagittis
            pellentesque convallis quam scelerisque. Ut nisl adipiscing varius
            sed fames. Sagittis blandit turpis sit tincidunt nulla tellus enim
            sit. Consectetur egestas tortor fermentum blandit{" "}
          </p>
          <button
            id="button"
            className="bg-none outline-none border-none max-w-[130px] xl:max-w-[180px] shrink-0 btnHov"
          >
            <img
              src={Get_Now}
              alt="Join Waitlist"
              className="h-auto w-full object-contain object-center"
            />
          </button>
        </div>
        <div className="relative z-20 overflow-hidden">
          <img
            src={Aje}
            alt="Artist"
            id="aje"
            className="xl:min-h-[500px] min-h-[320px] w-auto"
          />
        </div>
      </div>
      <div className="absolute z-20 bottom-0 w-full bg-gradient-to-t from-black to-black/0 h-[150px] md:h-[300px]" />
      <div className="absolute z-20 -left-14 -bottom-[50px] md:-bottom-[100px] bg-[#373FA5] blur-3xl h-[300px] w-[300px] md:w-[500px] md:h-[500px] opacity-20" />
      <div className="absolute z-30 top-[83%] md:top-[60%] md:sw-full min-w-[1000px] left-0 h-auto">
        <img src={LayerScale} alt="Layer Blur" className="h-auto w-screen" />
      </div>
      <div
        id="pool"
        className="absolute -right-[12%] xl:top-10 top-0 z-20 h-full w-fit hidden lg:block"
      >
        <div className="relative xl:h-[1000px]  md:h-[700px] ">
          <img
            src={LightPool}
            alt="Light Pool"
            className="h-full w-auto object-contain"
          />
          <img
            src={Light}
            alt="Light"
            id="light"
            className="xl:h-52 md:h-32 w-auto absolute top-[9%] -left-[3%] xl:-left-[5%] opacity-20"
          />
        </div>
      </div>
      <div className="absolute z-20 bottom-0 w-full bg-[#030F13] blur-2xl h-[150px] md:h-[300px]" />
      <div className="absolute -left-[20%] xl:-left-[12%] -bottom-20 md:-bottom-40 lg:-bottom-[250px] z-30 h-[250px] md:h-[400px] xl:h-[500px]">
        <img
          src={BlurredDrum}
          alt="Blurred"
          id="blurredDrum"
          className="h-full w-auto object-contain"
        />
      </div>
    </div>
  );
}
