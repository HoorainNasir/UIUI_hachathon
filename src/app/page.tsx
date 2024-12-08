import Image from "next/image";
import Header from "./components/header";
import Features from "./components/features";
import Card from "./components/cards";
import Signup from "./components/signup";
import Footer1 from "./components/footer1";

export default function Main() {
  return (
    <>
    <Header/>
      <div className="bg-[#2A254B] w-[1190px] h-[500px] my-[60px] ml-[80px] flex">
        <div className="flex-1 text-white text-[32px] leading-[44.8px] font-sans font-light">
          <h1 className=" mt-[60px] ml-[60px]">
            The furniture brand for the <br/> future, with timeless designs
          </h1>
          <button className="ml-[60px] mt-[40px] bg-[#565369] text-xs w-[130px] h-[50px]">
            View Collection
          </button>

          <h1 className="mx-[60px] text-lg leading-[27px] mt-[130px]">
          A new era in eco friendly furniture with Avelon, the French luxury retail brand
with nice fonts, tasteful colors and a beautiful way to display things digitally 
using modern web technologies.
          </h1>
        </div>
        
        <div>
          <Image src={"/chair.png"} alt="" width={445} height={540}/>
        </div>
      </div>

      <Features/>
      <h1 className="font-sans font-normal text-black text-[32px] leading-[39.36px] ml-[70px]">
      New ceramics
      </h1>
      <Card/>
      <Signup/>

      <div className="flex w-full">
        <div className="font-sans text-black flex-1 px-[84px] pt-[72px]">
          <h1 className="font-normal text-2xl">
          From a studio in London to a global brand with
          over 400 outlets
          </h1>
          <p className="font-light text-[16px] leading-[21.6px] mt-[20px]">
          When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.
          <br/>
          <br/> Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.
          </p>

          <button className="font-light bg-[#f9f9f9] w-[150px] h-[56px] px-[32px] py-[16px] mt-[100px] text-sm">
            Get in touch
          </button>
        </div>

        <div className="flex-1">
          <Image src={"/git.png"} alt="" width={720} height={603}/>
        </div>
      </div>
      <Footer1/>
    </>
  );
}
