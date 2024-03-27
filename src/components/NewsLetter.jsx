import React from "react";

const NewsLetter = () => {
  return (
    <div className="w-full py-16 text-white">
      <div className="max-w-[1240px] mx-auto md:grid lg:grid-cols-3 ">
        <div className="lg:col-span-2 px-4">
          <h1 className="md:text-4xl sm:text-3xl text-xl font-bond py-2">
            Want tips & tricks to optimize your flow
          </h1>
          <p>Sign up to our newsletter and stay up to date</p>
        </div>
        <div className="my-4">
            <div className="flex flex-colc  pr-6 sm:flex-row items-center justify-between w-fu">
                <input className="p-3 flex w-full rounded-md ml-4 text-bold  text-black" type="email" placeholder="Enter Email"/>
                <button className="bg-[#00df9a] w-[200px] rounded-md font-medium ml-4 my-6 mx-auto py-3 text-black">Notify me</button>
            </div>
            <p className="pl-4">We care about the protection of yout data. Read our <span className="text-[#00df9a]"><a href="#=">Privacy Policy</a></span> </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
