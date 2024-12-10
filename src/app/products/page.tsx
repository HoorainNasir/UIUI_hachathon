"use client"
import Link from "next/link";
import Image from "next/image";
import Card from "../components/cards";
import Card2 from "../components/card2";
import Footer1 from "../components/footer1";


export default function Products() {
    return (
        <div>
            {/* <Header /> */}
            <header className="block sm-hidden bg-white w-full h-[70px] sm:w-[100v] sm:h-[69px] pt-[20px] px-[25px]" >
                <section className="flex content-center">
                    <div className="cursor-pointer flex-1 pt-[5px]">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width='18px'
                            className="cursor-pointer fill-gray-400  hover:fill-black">
                            <path
                                d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z" />
                        </svg>
                    </div>
                    <h1 className=" flex-1 font-mono font-thin text-2xl text-[#22202E] sm:text-left">
                        Avion
                    </h1>
                    <div className="flex">
                        <Link href={"/shoppingCart"} className="pr-[10px] pt-[5px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 512 512">
                                <path
                                    d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                                    data-original="#000000"></path>
                            </svg>
                        </Link>

                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" className="cursor-pointer fill-[gray] hover:fill-black"
                            viewBox="0 0 512 512">
                            <path
                                d="M437.02 74.981C388.667 26.629 324.38 0 256 0S123.333 26.629 74.98 74.981C26.629 123.333 0 187.62 0 256s26.629 132.667 74.98 181.019C123.333 485.371 187.62 512 256 512s132.667-26.629 181.02-74.981C485.371 388.667 512 324.38 512 256s-26.629-132.667-74.98-181.019zM256 482c-66.869 0-127.037-29.202-168.452-75.511C113.223 338.422 178.948 290 256 290c-49.706 0-90-40.294-90-90s40.294-90 90-90 90 40.294 90 90-40.294 90-90 90c77.052 0 142.777 48.422 168.452 116.489C383.037 452.798 322.869 482 256 482z"
                                data-original="#000000" />
                        </svg>

                    </div>
                </section>

            </header>
            <div className="w-full md:lg:mb-0 mb-[20px]">
                <Image src={"/frame143.png"} alt="" width={1440} height={209} />
            </div>

            <div className="flex font-sans font-normal">
                <div className="relative  w-max mx-auto hidden sm:block">
                    <button type="button" id="dropdownToggle"
                        className="px-5 py-2.5 w-[163px] h-[56px] text-gray-800 text-sm outline-none bg-white hover:bg-gray-50">
                        Category
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-500 inline ml-3" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                                clip-rule="evenodd" data-original="#000000" />
                        </svg>
                    </button>

                    <ul id="dropdownMenu" className='absolute hidden shadow-[0_8px_19px_-7px_rgba(6,81,237,0.2)] bg-white py-2 z-[1000] min-w-full w-max divide-y max-h-96 overflow-auto'>
                        <li className='py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer'>Dropdown option</li>
                        <li className='py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer'>Cloth set</li>
                        <li className='py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer'>Sales details</li>
                        <li className='py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer'>Marketing</li>
                    </ul>
                </div>

                <div className="relative  w-max mx-auto hidden sm:block">
                    <button type="button" id="dropdownToggle"
                        className="px-5 py-2.5 w-[163px] h-[56px] text-gray-800 text-sm outline-none bg-white hover:bg-gray-50">
                        Product type
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-500 inline ml-3" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                                clip-rule="evenodd" data-original="#000000" />
                        </svg>
                    </button>

                    <ul id="dropdownMenu" className='absolute hidden shadow-[0_8px_19px_-7px_rgba(6,81,237,0.2)] bg-white py-2 z-[1000] min-w-full w-max divide-y max-h-96 overflow-auto'>
                        <li className='py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer'>Dropdown option</li>
                        <li className='py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer'>Cloth set</li>
                        <li className='py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer'>Sales details</li>
                        <li className='py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer'>Marketing</li>
                    </ul>
                </div>

                <div className="relative  w-max mx-auto hidden sm:block">
                    <button type="button" id="dropdownToggle"
                        className="px-5 py-2.5 w-[163px] h-[56px] text-gray-800 text-sm outline-none bg-white hover:bg-gray-50">
                        Price
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-500 inline ml-3" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                                clip-rule="evenodd" data-original="#000000" />
                        </svg>
                    </button>

                    <ul id="dropdownMenu" className='absolute hidden shadow-[0_8px_19px_-7px_rgba(6,81,237,0.2)] bg-white py-2 z-[1000] min-w-full w-max divide-y max-h-96 overflow-auto'>
                        <li className='py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer'>Dropdown option</li>
                        <li className='py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer'>Cloth set</li>
                        <li className='py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer'>Sales details</li>
                        <li className='py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer'>Marketing</li>
                    </ul>
                </div>

                <div className="relative flex-1  w-max mx-auto hidden sm:block">
                    <button type="button" id="dropdownToggle"
                        className="px-5 py-2.5 w-[163px] h-[56px] text-gray-800 text-sm outline-none bg-white hover:bg-gray-50">
                        Brand
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-500 inline ml-3" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                                clip-rule="evenodd" data-original="#000000" />
                        </svg>
                    </button>

                    <ul id="dropdownMenu" className='absolute hidden shadow-[0_8px_19px_-7px_rgba(6,81,237,0.2)] bg-white py-2 z-[1000] min-w-full w-max divide-y max-h-96 overflow-auto'>
                        <li className='py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer'>Dropdown option</li>
                        <li className='py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer'>Cloth set</li>
                        <li className='py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer'>Sales details</li>
                        <li className='py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer'>Marketing</li>
                    </ul>
                </div>

                <div className="flex font-sans font-normal text-black">
                    <h1 className="hidden sm:block text-[12px] pt-[13px]">
                        Sorting by:
                    </h1>
                    <div className="relative flex-1  w-max mx-auto hidden sm:block">
                        <button type="button" id="dropdownToggle"
                            className="px-5 py-2.5 w-[163px] h-[56px] text-gray-800 text-sm outline-none bg-white hover:bg-gray-50">
                            Date added
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-500 inline ml-3" viewBox="0 0 24 24">
                                <path fill-rule="evenodd"
                                    d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                                    clip-rule="evenodd" data-original="#000000" />
                            </svg>
                        </button>

                        <ul id="dropdownMenu" className='absolute hidden shadow-[0_8px_19px_-7px_rgba(6,81,237,0.2)] bg-white py-2 z-[1000] min-w-full w-max divide-y max-h-96 overflow-auto'>
                            <li className='py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer'>Dropdown option</li>
                            <li className='py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer'>Cloth set</li>
                            <li className='py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer'>Sales details</li>
                            <li className='py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer'>Marketing</li>
                        </ul>
                    </div>
                </div>

                <div className="flex">
                <div className="relative flex-1  w-max mx-auto block sm:hidden">
                    <button type="button" id="dropdownToggle"
                        className="px-5 py-2.5 w-[163px] h-[56px] ml-[20px] text-gray-800 text-sm outline-none bg-[#f9f9f9] hover:bg-gray-50">
                        Filters
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-500 inline ml-3" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                                clip-rule="evenodd" data-original="#000000" />
                        </svg>
                    </button>

                    <ul id="dropdownMenu" className='absolute hidden shadow-[0_8px_19px_-7px_rgba(6,81,237,0.2)] bg-white py-2 z-[1000] min-w-full w-max divide-y max-h-96 overflow-auto'>
                        <li className='py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer'>Dropdown option</li>
                        <li className='py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer'>Cloth set</li>
                        <li className='py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer'>Sales details</li>
                        <li className='py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer'>Marketing</li>
                    </ul>
                </div>
                <div className="relative flex-1  w-max mx-auto block sm:hidden">
                    <button type="button" id="dropdownToggle"
                        className="px-5 py-2.5 w-[163px] h-[56px] ml-[20px] text-gray-800 text-sm outline-none bg-white hover:bg-gray-50">
                        Sorting
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-500 inline ml-3" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                                clip-rule="evenodd" data-original="#000000" />
                        </svg>
                    </button>

                    <ul id="dropdownMenu" className='absolute hidden shadow-[0_8px_19px_-7px_rgba(6,81,237,0.2)] bg-white py-2 z-[1000] min-w-full w-max divide-y max-h-96 overflow-auto'>
                        <li className='py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer'>Dropdown option</li>
                        <li className='py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer'>Cloth set</li>
                        <li className='py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer'>Sales details</li>
                        <li className='py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer'>Marketing</li>
                    </ul>
                </div>

                </div>
            </div>

            
            <Card2 />
            <div className="hidden sm:block">
                <Card/>
            </div>
            <div className="block sm:hidden">
            <button className="font-sans font-light text-[16px] text-black text-sm py-[16px] px-[32px] bg-[#f9f9f9] w-[90%] md:lg:w-[170px] h-[56px] md:lg:ml-[600px] ml-[20px]">
                View Collection
            </button>
            </div>
            
            <Footer1 />

        </div>
    );
}