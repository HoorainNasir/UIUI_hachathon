export default function Signup(){
    return(
        <div className="md:lg:bg-[#f9f9f9] w-full md:lg:h-[481px] h-[350px] content-center md:Lg:mt-[60px] mt-[10px]">
            <div className="bg-white w-[85%] md:lg:h-[364px] h-[260px] ml-[20px] md:Lg:ml-[90px] text-center font-sans text-black">
                <h1 className="md:lg:font-normal font-light text-[20px] md:Lg:text-[36px] md:Lg:leading-[50.4px] pt-[20px] md:Lg:pt-[60px] ">
                Join the club and get the benefits
                </h1>
                <p className=" md:Lg:text-[16px] text-left md:lg:text-center text-[14px] md:Lg:leading-[24px] pt-[25px]">
                Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more
                </p>

                <div className=" md:Lg:mt-[80px] mt-[60px] flex">
                <input name="email" type="text" required 
                className=" md:Lg:w-[350px] h-[56px] font-normal text-[16px] leading-[21.6px] text-gray-800 bg-[lightgray] focus:border-[#1E2772] px-4 py-3 outline-none" placeholder="your@email.com" />
                <button className="flex-1 font-light bg-[#2A254B] md:lg:px-[32px] py=[16px]  md:Lg:w-[118px] h-[56px] text-white text-sm hover:bg-black">
                    Sign up
                </button>
                </div>
            </div>
        </div>
    );
}