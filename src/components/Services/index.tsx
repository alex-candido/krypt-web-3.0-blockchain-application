import React from "react";
// import { BsShieldFillCheck } from "react-icons/bs";
// import { BiSearchAlt } from "react-icons/bi";
// import { RiHeart2Fill } from "react-icons/ri";

const Services: React.FC  = () => {
  return (
    <div className="flex w-full justify-center items-center gradient-bg-services">
      <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
        <div className="flex-1 flex flex-col justify-start items-start">
        <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
          Services that we
          <br />
          continue to improve
        </h1>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
          The best choice for buying and selling your crypto assets, with the
          various super friendly services we offer
        </p>
        </div>
      </div>
    </div>
  )
}

export default Services