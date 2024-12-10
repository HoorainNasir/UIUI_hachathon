import Image from "next/image";

export default function Card2() {
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
                        The Dandy chair
                    </h1>
                    <p>
                        £250
                    </p>
                </div>

                <div className="md:lg:w-[290px] w-[163px] md:lg:h-[422px] h-[288px] font-sans font-light text-black text-sm md:lg:text-lg px-[10px] md:lg:bg-[#f9f9f9]">
                    <div className="md:lg:h-[330px] h-[170px]">
                        <Image src={"/img2.png"} alt="" width={280} height={375} />
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
                        <Image src={"/img3.png"} alt="" width={280} height={375} />
                    </div>
                    <h1 className="my-[10px]">
                        The Dandy chair
                    </h1>
                    <p>
                        £250
                    </p>
                </div>
            </div>
            <div className="grid md:lg:grid-cols-4 grid-cols-2 md:lg:gap-[10px] md:lg:mx-[60px] mx-[15px] md:lg:my-[60px] my-[20px]">
                <div className="md:lg:w-[290px] w-[163px] md:lg:h-[422px] h-[288px] font-sans font-light text-black text-sm md:lg:text-lg px-[10px] md:lg:bg-[#f9f9f9]">
                    <div className="md:lg:h-[330px] h-[170px]">
                        <Image src={"/img4.png"} alt="" width={280} height={375} />
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
                        <Image src={"/img5.png"} alt="" width={280} height={375} />
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
                        <Image src={"/img6.png"} alt="" width={280} height={375} />
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
                        <Image src={"/img7.png"} alt="" width={280} height={375} />
                    </div>
                    <h1 className="my-[10px]">
                        The Dandy chair
                    </h1>
                    <p>
                        £250
                    </p>
                </div>
            </div>

        </div>
    );
}