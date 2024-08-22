import Image from "next/image";
import React from "react";

import notWorkingApiImage from "../../../public/images/not-working.png";

const ApiNotWorking = () => {
  return (
    <div className="my-20">
      <h3 className=" text-center  font-bold md:text-xl">
        Apologies, but it seems the API is currently unavailable. Please try
        again later.
      </h3>
      <div className="flex justify-center my-8">
        <Image
          src={notWorkingApiImage}
          alt="not-working-api-image"
          width={150}
          height={150}
        />
      </div>
    </div>
  );
};

export default ApiNotWorking;
