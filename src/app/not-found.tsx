import Image from "next/image";
import React from "react";

const Notfound = () => {
  return (
    <div className="flex items-center w-full h-[600px] justify-center flex-col gap-5">
      <Image src={"/404.png"} alt="404" height={400} width={400} />
      <h1 className="text-3xl font-bold">Page not found please Go back </h1>
    </div>
  );
};

export default Notfound;
