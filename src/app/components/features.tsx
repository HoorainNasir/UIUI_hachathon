import Image from "next/image";

export default function Features(){
    return(
        <div className="font-sans font-light text-black md:lg:h-[305px] md:lg:ml-0 ml-[20px] md:lg:mb-0 mb-[40px]">
            <h1 className="text-2xl md:lg:font-normal font-light mt-[60px] md:lg:pr-0 pr-[50px] md:lg:ml-[529px]">
            What makes our brand different
            </h1>
            
            <div className="grid md:lg:grid-cols-4 grid-cols-1 gap-[35px] md:lg:mx-[80px] md:lg:mt-[60px] mt-[30px]">
                <div className="w-[270px] h-[140px] md:lg:bg-[#f9f9f9] p-[12px]">
                    <Image src={"/Delivery.png"} alt="" width={24} height={24}/>
                    
                    <h1 className="font- text-[20px] leading-[28px] my-[10px]">
                    Next day as standard
                    </h1>
                    <p className="text-[16px]">
                    Order before 3pm and get your order
                    the next day as standard
                    </p>
                </div>

                <div className="w-[270px] h-[140px] md:lg:bg-[#f9f9f9] p-[12px]">
                    <Image src={"/Checkmark.png"} alt="" width={24} height={24}/>
                    
                    <h1 className="font- text-[20px] leading-[28px] my-[10px]">
                    Made by true artisans
                    </h1>
                    <p className="text-[16px]">
                    Handmade crafted goods made with
real passion and craftmanship
                    </p>
                </div>

                <div className="w-[270px] h-[140px] md:lg:bg-[#f9f9f9] p-[12px]">
                    <Image src={"/Purchase.png"} alt="" width={24} height={24}/>
                    
                    <h1 className="font- text-[20px] leading-[28px] my-[10px]">
                    Unbeatable prices
                    </h1>
                    <p className="text-[16px]">
                    For our materials and quality you won&#39;t find better prices anywhere
                    </p>
                </div>

                <div className="w-[270px] h-[140px] md:lg:bg-[#f9f9f9] p-[12px]">
                    <Image src={"/Sprout.png"} alt="" width={24} height={24}/>
                    
                    <h1 className="font- text-[20px] leading-[28px] my-[10px]">
                    Recycled packaging
                    </h1>
                    <p className="text-[16px]">
                    We use 100% recycled packaging to ensure our footprint is manageable
                    </p>
                </div>
            </div>
        </div>
    );
}