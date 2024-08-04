import ContactImg from "./../assets/imgs/Contact_face.webp";
import SendButton from "./../assets/imgs/buttons/Send_message.svg";
import ContactBG from "./../assets/imgs/contact_bg.webp";

export default function Contact() {
  return (
    <div className="relative z-20">
      <div className="relative z-20 grid md:grid-cols-2 items-center w-full mt-20 md:mt-40 pb-5">
        <div className="hidden md:block">
          <div className="relative md:min-h-[400px] xl:min-h-[550px]">
            <img
              src={ContactImg}
              alt="Contact"
              className="absolute right-0 -bottom-[35%]"
            />
          </div>
        </div>
        <div className="grid lg:gap-20 md:gap-16 gap-14 pl-6 md:pl-0 pr-6 md:pr-14 lg:pr-20">
          <h2 className="uppercase text-left">Contact US</h2>
          <form action="" className="grid gap-5 max-w-xl">
            <div className="bg-[#747C94] shadow-inner shadow-black/25 px-5 py-4 rounded-xl">
              <input
                type="email"
                name=""
                id=""
                className="bg-transparent w-full outline-none border-none lg:text-xl"
                placeholder="EMAIL"
              />
            </div>
            <div className="bg-[#747C94] shadow-inner shadow-black/25 px-5 py-4 rounded-xl">
              <textarea
                name=""
                id=""
                placeholder="Message"
                className="resize-none bg-transparent h-24 w-full outline-none border-none lg:text-xl"
              ></textarea>
            </div>
            <button
              type="submit"
              id="button"
              className="bg-none outline-none border-none ms-auto max-w-[180px] md:max-w-[120px] xl:max-w-[180px] shrink-0 btnHov"
            >
              <img
                src={SendButton}
                alt="Join Waitlist"
                className="h-auto w-full object-contain object-center"
              />
            </button>
          </form>
        </div>
      </div>
      <div className="absolute z-10 w-screen md:h-[84%] h-[87%] xl:h-[75%] left-0 bottom-0">
        <img
          src={ContactBG}
          alt="Contact"
          className="h-full w-full object-cover object-top"
        />
      </div>
    </div>
  );
}
