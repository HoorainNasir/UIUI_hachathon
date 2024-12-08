import Image from "next/image";

export default function Features(){
    return(
        <div className="font-sans font-light text-black h-[305px]">
            <h1 className="text-2xl font-normal mt-[60px] ml-[529px]">
            What makes our brand different
            </h1>
            
            <div className="flex gap-[35px] mx-[80px] mt-[60px]">
                <div className="w-[270px] h-[140px] bg-[#f9f9f9] p-[12px]">
                    <Image src={"/Delivery.png"} alt="" width={24} height={24}/>
                    
                    <h1 className="font- text-[20px] leading-[28px] my-[10px]">
                    Next day as standard
                    </h1>
                    <p className="text-[16px]">
                    Order before 3pm and get your order
                    the next day as standard
                    </p>
                </div>

                <div className="w-[270px] h-[140px] bg-[#f9f9f9] p-[12px]">
                    <Image src={"/Checkmark.png"} alt="" width={24} height={24}/>
                    
                    <h1 className="font- text-[20px] leading-[28px] my-[10px]">
                    Made by true artisans
                    </h1>
                    <p className="text-[16px]">
                    Handmade crafted goods made with
real passion and craftmanship
                    </p>
                </div>

                <div className="w-[270px] h-[140px] bg-[#f9f9f9] p-[12px]">
                    <Image src={"/Purchase.png"} alt="" width={24} height={24}/>
                    
                    <h1 className="font- text-[20px] leading-[28px] my-[10px]">
                    Unbeatable prices
                    </h1>
                    <p className="text-[16px]">
                    For our materials and quality you won&#39;t find better prices anywhere
                    </p>
                </div>

                <div className="w-[270px] h-[140px] bg-[#f9f9f9] p-[12px]">
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