import Image from "next/image";
import Banner from "../components/banner";
import D_Nav from "../components/dNav";
import Card from "../components/cards";
import Features from "../components/features";
import Signup from "../components/signup";
import Footer2 from "../components/footer2";

export default function ProductChairs() {
    return (
        <div>
            <Banner />
            <D_Nav />
            <div className="grid md:lg:grid-cols-2 grid-cols-1">
                <div>
                    <Image src={"/leftimg.png"} alt="" width={621} height={759} />
                </div>
                <div className="md:lg:px-[0px] px-[20px] py-[30px] md:lg:pt-[60px] font-sans font-light text-black">
                    <h1 className="md:lg:text-4xl text-2xl">
                        The Dandy Chair
                    </h1>
                    <p className="text-2xl my-[10px]">
                        £250</p>

                    <div className="text-[14px] leading-[17.22px] md:lg:pr-5 pr-[30px]">
                        Product description <br /><br />
                        A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.
                        <br />
                        <br />
                        <ul>
                            <li>Premium material</li>
                            <li>
                                Handmade upholstery
                            </li>
                            <li>Quality timeless classic</li>
                        </ul>
                        <br />
                        <br />
                        <br />
                        <span className="text-sm">
                            Dimensions
                        </span>
                        <div className="flex mt-[10px] gap-10">
                            <ul>
                                <li>Height</li>
                                <li>
                                    110cm
                                </li>
                            </ul>
                            <ul>
                                <li>Width</li>
                                <li>
                                    75cm
                                </li>
                            </ul>
                            <ul>
                                <li>Depth</li>
                                <li>
                                    50cm
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex gap-5 mt-[60px]">
                        <h1 >
                            Amount
                        </h1>
                        <div>
                            <button type="button"
                                className="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 fill-current" viewBox="0 0 124 124">
                                    <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000"></path>
                                </svg>

                                <span className="mx-2.5">1</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 fill-current" viewBox="0 0 42 42">
                                    <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000"></path>
                                </svg>
                            </button>
                        </div>
                        <button className="bg-[#2a254b] w-[100px] md:lg:h-[46px] h-[35px] md:lg:text-sm text-xs text-white px-[12px] py-[10px] md:lg:ml-[350px] ml-[30px]">
                            Add to cart
                        </button>
                    </div>

                </div>
                
                
            </div>
            <h1 className="md:lg:mt-[60px] mt-[30px] font-sans md:lg:font-normal font-light text-black text-[32px] leading-[39.36px] ml-[20px] md:lg:ml-[70px]">
                        You might also like
                    </h1>
                    <Card />
                    <Features />
                    <Signup/>
                    <Footer2/>
        </div>
    );
}