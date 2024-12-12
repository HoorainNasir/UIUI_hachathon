export default function Signup(){
    return(
        <div className="md:lg:bg-[#f9f9f9] w-full md:lg:h-[481px] h-[350px] content-center md:lg:mt-[60px] mt-[10px]">
            <div className="bg-white w-[85%] md:lg:h-[364px] h-[260px] md:lg:ml-[90px] ml-[20px] text-center font-sans text-black">
                <h1 className="md:lg:font-normal font-light text-[20px] md:lg:text-[36px] md:lg:leading-[50.4px] pt-[20px] md:lg:pt-[60px] ">
                Join the club and get the benefits
                </h1>
                <p className=" md:lg:text-[16px] md:lg:px-[300px] px-0 text-left md:lg:text-center text-[14px] md:lg:leading-[24px] pt-[25px]">
                Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more
                </p>

                <div className=" md:lg:mt-[80px] mt-[60px] md:lg:mx-[250px] mx-0 flex">
                <input name="email" type="text" required 
                className=" md:lg:w-[450px] w-[350px] h-[56px] font-normal text-[16px] leading-[21.6px] text-gray-800 bg-[lightgray] focus:border-[#1E2772] px-4 py-3 outline-none" placeholder="your@email.com" />
                <button className="flex-1 font-light bg-[#2A254B] md:lg:px-[32px] px-[24px] py=[16px]  md:lg:w-[118px] h-[56px] text-white text-sm hover:bg-black">
                    Sign up
                </button>
                </div>
            </div>
        </div>
    );
}