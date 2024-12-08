import Image from "next/image";
import Header from "../components/header";
import Link from "next/link";
import Footer1 from "../components/footer1";

export default function ShoppingCart() {
    return (
        <div>
            <Header />

            <div className="bg-[#f9f9f9] w-full h-[749px] text-black font-sans">
                <h1 className="font-normal text-4xl pt-[50px] pl-[100px]">
                    Your shopping cart
                </h1>

                <div className="grid grid-cols-3 pt-[50px] pl-[100px] font-light border-b-[1px] mx-[20px] pb-[5px] gap-2">
                    <h1 className="text-sm">
                        Product
                    </h1>
                    <h1 className="text-sm ml-[200px]">
                        Quantity
                    </h1>
                    <h1 className="text-sm ml-[250px]">
                        Total
                    </h1>
                </div>

                <div className="grid grid-cols-3 pt-[50px] pl-[100px] font-light mx-[20px] pb-[5px] gap-2">
                    <div className="w-[309px] h-[134px] flex gap-1">
                        <div>
                            <Image src={"/pi1.png"} alt="" width={109} height={134} />
                        </div>
                        <div className="ml-[8px]">
                            <h1 className="text-xl">
                                Graystone vase
                            </h1>
                            <p className="text-sm my-[15px] ">
                                A timeless ceramic vase with <br />
                                a tri color grey glaze.
                            </p>
                            <p className="text-base">
                                £85
                            </p>
                        </div>

                    </div>


                    <p className="text-sm my-[15px] ml-[200px]">
                        1
                    </p>
                    <p className="text-base ml-[250px]">
                        £85
                    </p>
                </div>

                <div className="grid grid-cols-3 pt-[50px] pl-[100px] font-light border-b-[1px] mx-[20px] pb-[5px] gap-2">
                    <div className="w-[309px] h-[134px] flex gap-1">
                        <div>
                            <Image src={"/pi2.png"} alt="" width={109} height={134} />
                        </div>
                        <div className="ml-[8px]">
                            <h1 className="text-xl">
                            Basic white vase
                            </h1>
                            <p className="text-sm my-[15px] ">
                            Beautiful and simple this is <br/>
                            one for the classics
                            </p>
                            <p className="text-base">
                            £85
                            </p>
                        </div>

                    </div>


                    <p className="text-sm my-[15px] ml-[200px]">
                        1
                    </p>
                    <p className="text-base ml-[250px]">
                        £85
                    </p>
                </div>

                <div className="font-light w-[240px] h-[100vh] text-black ml-[1000px]">
                    <h1 className="text-xl text-right">
                        Subtotal <span className="text-2xl font-light">
                        £210
                        </span>
                    </h1>
                    <p className="text-sm my-[15px]">
                    Taxes and shipping are calculated at checkout
                    </p>
                    <Link href={""}>
                    <button className="text-white text-sm px-[32px] py[16px] bg-[#2a254b] w-[172px] h-[56px]">
                        Go to checkout</button></Link>
                </div>

            </div>
            <Footer1/>
        </div>
    );
}