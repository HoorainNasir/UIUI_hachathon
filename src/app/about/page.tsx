import Link from "next/link";
import Banner from "../components/banner";
import D_Nav from "../components/dNav";
import Image from "next/image";
import Features from "../components/features";
import Signup from "../components/signup";
import Footer2 from "../components/footer2";

export default function About() {
    return (
        <div>
            <Banner />
            <D_Nav />
            {/* navbar below section */}
            <section className="block sm:hidden">
                <ul className="font-normal text-[10px] md:lg:text-base flex text-[#726E8D] gap-3 md:lg:gap-[25px] pt-[20px] justify-center">
                    <Link href={""}>
                        <li>Plant Pots</li></Link>
                    <Link href="">
                        <li>Ceramics</li></Link>
                    <Link href={""}>
                        <li>Tables</li></Link>
                    <Link href={"/productListing"}>
                        <li>Chairs</li></Link>
                    <Link href={""}>
                        <li>Crockery</li>
                    </Link>
                    <Link href={""}>
                        <li>Tableware</li></Link>
                    <Link href={""}>
                        <li>Cutiery</li></Link>
                </ul>
            </section>
            <div className="w-full mx-[20px] md:lg:mx-[80px] grid md:lg:grid-cols-2 grid-cols-1 md:lg:my-[60px]">
                <h1 className="text-black font-sans font-normal text-2xl md:lg:text-4xl mr-[100px]">
                    A brand built on the love of craftmanship,
                    quality and outstanding customer service
                </h1>

                <Link href={""}>
                    <button className="text-black bg-[#f9f9f9] md:lg:mt-0 mt-6 w-[192px] h-[56px] px-[32px] py-[16px] text-sm">
                        View our products</button></Link>
            </div>

            <div className="w-[90%] md:lg:w-full px-[20px] md:lg:px-[80px] py-[60px] grid md:lg:grid-cols-2 grid-cols-1 gap-2 md:lg:gap-6">
                <div className="md:lg:w-[600px] w-[112%] md:lg:h-[450px] h-[350px] font-sans text-white bg-[#2A254B] px-[40px]">
                    <h1 className="md:lg:font-normal font-light text-[32px] leading-[39.36px] mt-[40px]">
                        It started with a small idea
                    </h1>
                    <p className="font-light text-[18px] leading-[24.3px] mt-[20px] md:lg:mr-0 mr-[50px]">
                        A global brand with local beginnings, our story begain in a
                        small studio in South London in early 2014
                    </p>

                    <Link href={""}>
                        <button className="text-white mt-[20px] md:lg:mt-[180px] bg-[#4b435a] w-[192px] h-[56px] px-[32px] py-[16px] text-sm">
                            View collection</button></Link>
                </div>

                <div className="md:lg:w-[593px] w-[112%] md:lg:h-[450px]">
                    <Image src={"/imgBlock.png"} alt="" width={630} height={478} />
                </div>
            </div>

            <div className="w-full grid md:lg:grid-cols-2 grid-cols-1">

                <div className="md:lg:w-[100%] md:lg:mb-0 mb-11 md:lg:h-[560px]">
                    <Image src={"/imgBlock2.png"} alt="" width={720} height={603} />
                </div>

                <div className="md:lg:w-[100%] md:lg:h-[560px] font-sans text-black bg-[#f9f9f9] px-[40px]">
                    <h1 className="md:lg:font-normal font-light text-[32px] leading-[39.36px] md:lg:pr-0 pr-[90px] md:lg:mt-[40px]">
                        Our service isn&#39;t just personal, it&#39;s actually
                        hyper personally exquisite
                    </h1>
                    <p className="font-light text-[18px] leading-[24.3px] mt-[20px] md:lg:pr-0 pr-[40px]">
                        When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.
                        <br />
                        <br /> Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.
                    </p>

                    <Link href={""}>
                        <button className="text-black mt-[50px] md:lg:mt-[180px] bg-white w-[100%] md:lg:w-[192px] h-[56px] px-[32px] py-[16px] text-sm md:lg:mb-0 mb-[50px]">
                            Get in touch</button></Link>
                </div>
            </div>

            <Features />
            <Signup />
            <Footer2 />
        </div>
    );
}