import Image from "next/image";

export default function Card2() {
    return (
        <div>
            <div className="flex gap-[10px] mx-[60px] my-[60px]">
                <div className="w-[290px] h-[422px] font-sans font-light text-black px-[10px] bg-[#f9f9f9]">
                    <div>
                        <Image src={"/img.png"} alt="" width={280} height={375} />
                    </div>
                    <h1 className="my-[10px]">
                        The Dandy chair
                    </h1>
                    <p>
                        £250
                    </p>
                </div>

                <div className="w-[290px] h-[422px] font-sans font-light text-black px-[10px] bg-[#f9f9f9]">
                    <div>
                        <Image src={"/img1.png"} alt="" width={280} height={375} />
                    </div>
                    <h1 className="my-[10px]">
                        The Dandy chair
                    </h1>
                    <p>
                        £250
                    </p>
                </div>

                <div className="w-[290px] h-[422px] font-sans font-light text-black px-[10px] bg-[#f9f9f9]">
                    <div>
                        <Image src={"/img2.png"} alt="" width={280} height={375} />
                    </div>
                    <h1 className="my-[10px]">
                        The Dandy chair
                    </h1>
                    <p>
                        £250
                    </p>
                </div>

                <div className="w-[290px] h-[422px] font-sans font-light text-black px-[10px] bg-[#f9f9f9]">
                    <div>
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
            <div className="flex gap-[10px] mx-[60px] my-[60px]">
                <div className="w-[290px] h-[422px] font-sans font-light text-black px-[10px] bg-[#f9f9f9]">
                    <div>
                        <Image src={"/img4.png"} alt="" width={280} height={375} />
                    </div>
                    <h1 className="my-[10px]">
                        The Dandy chair
                    </h1>
                    <p>
                        £250
                    </p>
                </div>

                <div className="w-[290px] h-[422px] font-sans font-light text-black px-[10px] bg-[#f9f9f9]">
                    <div>
                        <Image src={"/img5.png"} alt="" width={280} height={375} />
                    </div>
                    <h1 className="my-[10px]">
                        The Dandy chair
                    </h1>
                    <p>
                        £250
                    </p>
                </div>

                <div className="w-[290px] h-[422px] font-sans font-light text-black px-[10px] bg-[#f9f9f9]">
                    <div>
                        <Image src={"/img6.png"} alt="" width={280} height={375} />
                    </div>
                    <h1 className="my-[10px]">
                        The Dandy chair
                    </h1>
                    <p>
                        £250
                    </p>
                </div>

                <div className="w-[290px] h-[422px] font-sans font-light text-black px-[10px] bg-[#f9f9f9]">
                    <div>
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