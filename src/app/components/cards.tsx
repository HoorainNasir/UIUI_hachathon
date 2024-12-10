import Image from "next/image";

export default function Card() {
    return (
        <div>
            <div className="grid md:lg:grid-cols-4 grid-cols-2 md:lg:gap-[10px] md:lg:mx-[60px] mx-[15px] md:lg:my-[60px] my-[20px]">
                <div className="md:lg:w-[290px] w-[163px] md:lg:h-[422px] h-[288px] font-sans font-light text-black text-sm md:lg:text-lg px-[10px] md:lg:bg-[#f9f9f9]">
                    <div className="md:lg:h-[330px] h-[170px]">
                        <Image src={"/img.png"} alt="" width={280} height={375} />
                    </div>
                    <h1 className="my-[10px]">
                        The Dandy chair
                    </h1>
                    <p>
                        £250
                    </p>
                </div>

                <div className="md:lg:w-[290px] w-[163px] md:lg:h-[422px] h-[288px] font-sans font-light text-black text-sm md:lg:text-lg px-[10px] md:lg:bg-[#f9f9f9]">
                    <div className="md:lg:h-[330px] h-[170px]">
                        <Image src={"/img1.png"} alt="" width={280} height={375} />
                    </div>
                    <h1 className="my-[10px]">
                    Rustic Vase Set
                    </h1>
                    <p>
                    £155
                    </p>
                </div>

                <div className="md:lg:w-[290px] w-[163px] md:lg:h-[422px] h-[288px] font-sans font-light text-black text-sm md:lg:text-lg px-[10px] md:lg:bg-[#f9f9f9]">
                    <div className="md:lg:h-[330px] h-[170px]">
                        <Image src={"/img2.png"} alt="" width={280} height={375} />
                    </div>
                    <h1 className="my-[10px]">
                    The Silky Vase
                    </h1>
                    <p>
                        £125
                    </p>
                </div>

                <div className="md:lg:w-[290px] w-[163px] md:lg:h-[422px] h-[288px] font-sans font-light text-black text-sm md:lg:text-lg px-[10px] md:lg:bg-[#f9f9f9]">
                    <div className="md:lg:h-[330px] h-[170px]">
                        <Image src={"/img3.png"} alt="" width={280} height={375} />
                    </div>
                    <h1 className="my-[10px]">
                        The Lucy Lamp
                    </h1>
                    <p>
                        £399
                    </p>
                </div>
            </div>
            <button className="font-sans font-light text-[16px] text-black text-sm py-[16px] px-[32px] bg-[#f9f9f9] w-[90%] md:lg:w-[170px] h-[56px] md:lg:ml-[600px] ml-[20px]">
                View Collection
            </button>
        </div>
    );
}