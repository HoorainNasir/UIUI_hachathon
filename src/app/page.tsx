"use client"

import Image from "next/image";
import Header from "./components/header";
import Features from "./components/features";
import Card from "./components/cards";
import Signup from "./components/signup";
import Footer1 from "./components/footer1";

export default function Main() {
  return (
    <>
      <Header />
      <div className=" md:lg:w-[1190px] w-0 h-[500px] md:lg:my-[60px] md:lg:ml-[80px] ml-0 my-0 grid  md:lg:grid-cols-2 grid-cols-1">
        <div className="flex-1 bg-[#2A254B]  md:lg:w-full w-[390px] text-white text-[32px] leading-[44.8px] font-sans font-light">
          <h1 className="md:ld:mt-[60px] mt-[30px] md:lg:ml-[60px] ml-[20px] md:lg:mr-[250px] mr-[70px]">
            The furniture brand for the future, with timeless designs
          </h1>
          <button className="hidden sm:block ml-[60px] mt-[40px] bg-[#565369] text-xs w-[130px] h-[50px]">
            View Collection
          </button>

          <h1 className="md:lg:mx-[60px] text-lg leading-[27px] md:lg:mt-[130px] mt-[60px] ml-[20px] md:lg:mr-0 mr-[0px]">
            A new era in eco friendly furniture with Avelon, the French luxury retail brand
            with nice fonts, tasteful colors and a beautiful way to display things digitally
            using modern web technologies.
          </h1>

          <button className="block sm:hidden mx-[20px] mt-[60px] bg-[#565369] text-xs w-[60%] h-[56px]">
  View Collection
</button>
        </div>

        <div className="hidden sm:block">
          <Image src={"/chair.png"} alt="" width={445} height={540} />
        </div>
      </div>

      <Features />
      <h1 className="font-sans md:lg:font-normal font-light text-black text-[32px] leading-[39.36px] md:lg:ml-[70px] ml-[20px]">
        New ceramics
      </h1>
      <Card />
      <Signup />

      <div className="grid md:lg:grid-cols-2 grid-cols-1 w-full">
        <div className="font-sans text-black flex-1 md:lg:px-[84px] px-[20px] pt-[20px] md:lg:pt-[72px]">
          <h1 className="md:lg:font-normal font-light text-xl md:lg:text-2xl">
            From a studio in London to a global brand with
            over 400 outlets
          </h1>
          <p className="font-light text-[14px] md:lg:text-[16px] md:lg:leading-[21.6px] mt-[20px]">
            When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.
            <br />
            <br /> Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.
          </p>

          <button className="font-light bg-[#f9f9f9] md:lg:w-[150px] w-[85%] h-[56px] px-[32px] py-[16px] mt-[60px] md:lg:mt-[100px] text-sm">
            Get in touch
          </button>
        </div>

        <div className="flex-1 block sm:hidden mt-[30px]">
          <Image src={"/git.png"} alt="" width={720} height={603} />
        </div>

        <div className="flex-1 hidden sm:block">
          <Image src={"/git.png"} alt="" width={720} height={603} />
        </div>
      </div>
      <Footer1 />
    </>
  );
}
