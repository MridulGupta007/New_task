import React from "react";
import logo from "./assets/logo.png";
function App() {
  return (
    <>
    <div className="bg-[#101c5ca3] h-40 w-[900px] absolute left-[33%] blur-highlight"></div>
    <div className="h-[100vh] bg-swirl">
    
    <Navbar />
    <div className="mt-[192px] font-outfit flex flex-col px-[279px] justify-center">
      
      <div className="flex flex-col mb-[82px]">
        <h1 className="font-normal leading-custom text-[56px] text-[#fff] mb-5">
          Empowering Lives Through <br /> Innovative{" "}
          <span className="font-bold border-b-8 border-[#7f93ff]">AI</span> Technologies.
        </h1>
        <p className="text-[#c0c2cc] mb-[26px] text-[22px] leading-custom-30">
          Finding new horizons for visionaries to accelerate their innovation
          and progress.
        </p>
        <div className="flex gap-x-[15px] text-[18px] leading-custom-30">
          <button className="bg-[#6A35ff] text-[#fff] px-9 py-3 rounded-xl font-bold">
            Explore Our Services
          </button>
          <button className="border border-[#6881ff] text-[#fff] px-8 py-3 rounded-xl font-semibold">
            Learn More
          </button>
        </div>
      </div>
      <p className="text-[24px] leading-custom-30">
        <span className="bg-gradient-to-r from-[#1c1c1c] to-[#e3e3e380] inline-block text-transparent bg-clip-text">
          From Ideas to Software Solutions
        </span>
        💡✨
        <span className="bg-gradient-to-r from-[#e3e3e3] to-[#e3e3e3ad] inline-block text-transparent bg-clip-text">
          From Ideas to Software Solutions
        </span>
        🌟✨
        <span className="bg-gradient-to-r from-[#e3e3e3ad] to-[#1c1c1c] inline-block text-transparent bg-clip-text">
          From Ideas to
        </span>
      </p>
    </div>
    </div>
    </>
  );
}

export default App;

const Navbar = () => {
  return (
    <div className="bg-[#000000] flex items-center justify-between px-60 h-20 font-outfit">
      <img src={logo} alt="logo" className="w-20" />
      <ul className="text-[#fff] flex items-center gap-x-7 font-normal text-[18px] leading-custom-30">
        <li>About</li>
        <li>Services</li>
        <li>Process</li>
        <li>Work</li>
        <li>Pricing</li>
        <li>FAQs</li>
      </ul>
      <button className="text-[#fff] border border-[#6881ff] px-7 py-3 rounded-xl font-semibold text-[16px] leading-custom-30">
        Book a call
      </button>
    </div>
  );
};
