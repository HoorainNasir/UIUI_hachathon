import Image from "next/image";
import Header from "../components/header";
import Link from "next/link";
import Footer1 from "../components/footer1";

export default function ShoppingCart() {
    return (
        <div>
            <Header />

            <div className="bg-[#f9f9f9] w-full h-[749px] text-black font-sans">
                <h1 className="font-light md:lg:font-normal text-4xl pt-[30px] pl-[20px] md:lg:pt-[50px] md:lg:pl-[100px]">
                    Your shopping cart
                </h1>

                <div className="hidden sm:block">
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
                </div>

                <div className="grid md:lg:grid-cols-3 grid-cols-1 pt-[50px] md:lg:pl-[100px] font-light mx-[20px] pb-[5px] gap-2">
                    <div className="md:lg:w-[309px] w-full h-[134px] flex gap-1">
                        <div className="md:lg:w-[109px] ">
                            <Image src={"/pi1.png"} alt="" width={145} height={134} />
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
                    <p className="hidden sm:block text-base ml-[250px]">
                        £85
                    </p>
                </div>

                <div className="grid md:lg:grid-cols-3 grid-cols-1 pt-[50px] md:lg:pl-[100px] font-light mx-[20px] pb-[5px] gap-2">
                    <div className="md:lg:w-[309px] w-full h-[134px] flex gap-1">
                        <div className="md:lg:w-[109px] ">
                            <Image src={"/pi2.png"} alt="" width={145} height={134} />
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
                    <p className="hidden sm:block text-base ml-[250px]">
                        £85
                    </p>
                </div>

                <div className="font-light w-full md:lg:w-[240px] h-[100vh] text-black ml-[0px] md:lg:ml-[1000px]">
                    <h1 className="text-xl mr-[20px] text-right">
                        Subtotal  <span className="text-2xl font-light">
                        £210
                        </span>
                    </h1>
                    <p className="text-sm md:lg:text-left text-right mr-[20px] my-[15px]">
                    Taxes and shipping are calculated at checkout
                    </p>
                    <Link href={""}>
                    <button className="text-white text-sm px-[32px] py[16px] bg-[#2a254b] w-[92%] md:lg:w-[172px] h-[56px] md:lg:mx-0 mx-[20px]">
                        Go to checkout</button></Link>
                </div>

            </div>
            <Footer1/>
        </div>
    );
}