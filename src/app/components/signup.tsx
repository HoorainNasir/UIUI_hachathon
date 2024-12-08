export default function Signup(){
    return(
        <div className="bg-[#f9f9f9] w-full h-[481px] content-center mt-[60px]">
            <div className="bg-white w-[85%] h-[364px] ml-[90px] text-center font-sans text-black">
                <h1 className="font-normal text-[36px] leading-[50.4px] pt-[60px]">
                Join the club and get the benefits
                </h1>
                <p className="text-[16px] leading-[24px] pt-[25px]">
                Sign up for our newsletter and receive exclusive offers on new ranges, <br/> sales, pop up stores and more
                </p>

                <div className="mt-[80px] flex-1">
                <input name="email" type="text" required 
                className="w-[350px] h-[56px] font-normal text-[16px] leading-[21.6px] text-gray-800 bg-[lightgray] focus:border-[#1E2772] px-4 py-3 outline-none" placeholder="your@email.com" />
                <button className="flex-1 font-light bg-[#2A254B] px-[32px] py=[16px] w-[118px] h-[56px] text-white text-sm hover:bg-black">
                    Sign up
                </button>
                </div>
            </div>
        </div>
    );
}