import VideoCover from "./../assets/imgs/VideoPlayer.webp";

export default function VideoDisplayer() {
  return (
    <div className="px-8 md:px-20 pt-8 md:pt-20 pb-20">
      <div className="max-w-5xl relative mx-auto">
        <div className="absolute h-[77%] z-20 border-2 border-[#8899C2] top-[5.5%] left-[4%] right-[5%]">
          <iframe
            className="w-full h-full"
            height="315"
            src="https://www.youtube.com/embed/rChLaLZd3Mo?si=PccRMJYIHPRsMzfo"
            title="Culangex Intro"
          ></iframe>
        </div>
        <img
          src={VideoCover}
          alt="Video Player Cover"
          className="h-full w-full object-contain object-left-top"
        />
      </div>
    </div>
  );
}
