import Image from "next/image";

export default function Card() {
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
            <button className="font-sans font-light text-[16px] text-black py-[16px] px-[32px] bg-[#F9F9F9] w-[170px] h-[56px] ml-[600px]">
                View Collection
            </button>
        </div>
    );
}