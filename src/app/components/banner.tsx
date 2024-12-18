export default function Banner() {
  return (
    <div className="flex items-center max-md:flex-col gap-6 bg-[#2A254B] text-white px- md:lg:px-6 md:lg:h-[40px] h-[54px] py-3.5 text-[14px] leading-[18.9px] w-[101%] font-sans">
      <p className="md:lg:font-normal font-light md:lg:ml-[450px] flex-1 max-md:text-center ml-1 text-left">Free delivery on all orders over £50 with code easter checkout</p>

      <div>
        <svg xmlns="http://www.w3.org/2000/svg"
          className="w-3.5 cursor-pointer fill-white inline-block ml-4" viewBox="0 0 320.591 320.591">
          <path
            d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
            data-original="#000000" />
          <path
            d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
            data-original="#000000" />
        </svg>
      </div>
    </div>
  );
}