import Card from "@/components/Card";
import Hero from "@/components/Hero";
import NewsletterSignup from "@/components/NewsLatterSigup";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col gap-10">
      <Hero />

      <div className="flex flex-col items-center w-full justify-center flex-wrap gap-10">
        <div className="flex items-center w-full justify-between  sm:px-28 px-0">
        <h1 className="sm:text-3xl text-xl font-semibold border-l-4 border-l-green-500 pl-2">
        USB Cables & Sockets
          </h1>

          <h2 className="font-semibold bg-green-100 p-2 text-xl rounded-md text-green-500">
            View all
          </h2>
        </div>
        <div className="flex items-center w-full ">
          <Card />
        </div>
      </div>

    
      <NewsletterSignup />
    </div>
  );
};

export default Home;
