import Link from "next/link";
import Banner from "../components/banner";
import D_Nav from "../components/dNav";
import Image from "next/image";
import Features from "../components/features";
import Signup from "../components/signup";
import Footer2 from "../components/footer2";

export default function About(){
    return(
        <div>
            <Banner/>
            <D_Nav/>
            <div className="w-full mx-[20px] md:lg:mx-[80px] grid md:lg:grid-cols-2 grid-cols-1  md:lg:my-[60px]">
                <h1 className="text-black font-sans font-normal text-2xl md:lg:text-4xl md:lg:mr-[250px]">
                A brand built on the love of craftmanship,
                quality and outstanding customer service
                </h1>

                <Link href={""}>
            <button className="text-black bg-[#f9f9f9] md:lg:mt-0 mt-6 w-[192px] h-[56px] px-[32px] py-[16px] text-sm">
                View our products</button></Link>
            </div>

            <div className="w-[90%] md:lg:w-full px-[20px] md:lg:px-[80px] py-[60px] flex gap-2">
                <div className="w-[600px] h-[450px] font-sans text-white bg-[#2A254B] px-[40px]">
                    <h1 className="font-normal text-[32px] leading-[39.36px] mt-[40px]">
                    It started with a small idea
                    </h1>
                    <p className="font-light text-[18px] leading-[24.3px] mt-[20px]">
                    A global brand with local beginnings, our story begain in a <br/>
                    small studio in South London in early 2014
                    </p>

                    <Link href={""}>
            <button className="text-white mt-[50px] md:lg:mt-[180px] bg-[#4b435a] w-[192px] h-[56px] px-[32px] py-[16px] text-sm">
                View collection</button></Link>
                </div>
                
                <div className="w-[600px] h-[450px] hidden sm:block">
                    <Image src={"/imgBlock.png"} alt="" width={630} height={478}/>
                </div>
            </div>

            <div className="w-full grid md:lg:grid-cols-2 grid-cols-1">
                
                <div className="w-[50%] h-[560px]">
                    <Image src={"/imgBlock2.png"} alt="" width={720} height={603}/>
                </div>

                <div className="w-[50%] h-[560px] font-sans text-black bg-[#f9f9f9] px-[40px]">
                    <h1 className="font-normal text-[32px] leading-[39.36px] md:lg:mt-[40px]">
                    Our service isn&#39;t just personal, it&#39;s actually
hyper personally exquisite
                    </h1>
                    <p className="font-light text-[18px] leading-[24.3px] mt-[20px]">
                    When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.
                    <br/>
                    <br/> Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.
                    </p>

                    <Link href={""}>
            <button className="text-black mt-[180px] bg-white w-[192px] h-[56px] px-[32px] py-[16px] text-sm">
                Get in touch</button></Link>
                </div>
            </div>

            <Features/>
            <Signup/>
            <Footer2/>
        </div>
    );
}