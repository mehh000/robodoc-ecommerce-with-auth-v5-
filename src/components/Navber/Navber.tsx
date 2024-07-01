//

import React from "react";
import { IoPersonOutline } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import { FiAlignCenter } from "react-icons/fi";
import Image from "next/image";
import MobileNavber from "./MobileNavber";
import MenuList from "./MenuList";
import { auth } from "../../../auth";
import { redirect } from "next/navigation";
import Link from "next/link";

const Navber = async () => {
  const session = await auth();
console.log(session?.user.id);
  return (
    <>
      <div className="flex flex-col ">
        {/* top title */}
        <div className="flex items-center justify-between px-5 bg-slate-100 md:h-16 h-10">
          <div className="flex gap-5">
            <span className="flex items-center gap-3">
              <FiPhone /> <p className="md:block hidden">(+88) 01322 908 240</p>
            </span>
            <span className="flex items-center gap-3">
              <IoMailOutline />{" "}
              <p className="md:block hidden">support@robodocbd.com</p>
            </span>
          </div>
          <div className="">{ session?.user ? "" :  "Sign In" }</div>

        </div>
        {/* nav */}
        <div className="bg-white flex flex-col  md:py-5 py-3">
          <div className="container grid grid-cols-2 py-[1rem] md:flex md:items-center md:justify-between lg:pb-0 lg:pt-[2rem]">
            <div className="order-1 flex cursor-pointer items-center space-x-[1.25rem] lg:space-x-0">
              <div className=" xl:hidden inline">
                <MobileNavber />
              </div>

              <Image src="/logo.webp" alt="logo" height={180} width={250} />
            </div>
            <div className="relative order-3 col-span-2 mt-[1.875rem] md:order-2 md:mt-0">
              <div className="relative h-[3rem] rounded-[2.625rem] border border-grayDisplay-200 md:w-[23rem] lg:w-[25rem] min-[1200px]:w-[30rem] 2xl:w-[45rem]">
                <form action="" className="h-full w-full rounded-[2.625rem]">
                  <input
                    type="text"
                    placeholder="Search anything..."
                    className=" h-full w-full rounded-[2.625rem] border-0 pl-4 pr-[2.75rem] focus:border-grayDisplay-200 focus:outline-none focus:ring-1 focus:ring-grayDisplay-200"
                  />
                  <button className="absolute right-[.8%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <FiSearch size={25} className="text-green-400" />
                  </button>
                </form>
              </div>
            </div>
            <div className="order-2 flex items-center space-x-[1.625rem] justify-self-end md:order-3">
            <Link href={`/pages/info_personal/${session?.user.id}`} > 
              <IoPersonOutline className="md:p-2 p-1 rounded-full md:text-5xl text-4xl border-2 hover:border-none hover:text-white hover:bg-green-400 border-gray-300" />
              </Link>
              <Link href={`/pages/cart`} > 
              <BsCart2 className="md:p-2 p-1 rounded-full md:text-5xl text-4xl border-2 hover:border-none hover:text-white hover:bg-green-400 border-gray-300" />
            </Link> </div>
          </div>
          {/* nam list */}
        </div>
      </div>
      <div className=" shadow-lg border-b-2 ">
        <MenuList />
      </div>
    </>
  );
};

export default Navber;
