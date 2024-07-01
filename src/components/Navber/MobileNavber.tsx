'use client'
import React, { useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FiAlignCenter } from "react-icons/fi";
import MenuList from "./MenuList";
import { TbCategory } from "react-icons/tb";
import { FaAngleDown } from "react-icons/fa";
import { FaGift } from "react-icons/fa6";

const MobileNavber = () => {
  const [open,setOpen] = useState('egg')


console.log(open);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button>
          <FiAlignCenter className="text-3xl" />
        </button>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <div className="flex w-full h-full flex-col  gap-6">
          <div className="flex items-center gap-3 self-start">
            <TbCategory /> <span onClick={()=>setOpen('all')} className="text-xl "> All category</span> 
          </div>
          <div className=" flex items-center  justify-between">
          <span onClick={()=>setOpen('project')} className="text-xl ">   Project Kits</span>  <FaAngleDown />
          </div>
          <div className=" flex items-center  justify-between">
          <span onClick={()=>setOpen('robotics')} className="text-xl ">  Robotics</span>  <FaAngleDown />
          </div>
          <div className=" flex items-center  justify-between">
          <span onClick={()=>setOpen('components')} className="text-xl "> Components</span>  <FaAngleDown />
          </div>
          <div className=" flex items-center  justify-between">
          <span onClick={()=>setOpen('sensores')} className="text-xl "> Sensors</span>  <FaAngleDown />
          </div>
          <div className=" flex items-center self-start">
          <span className="text-xl "> Innovation Kit</span>
          </div>
          <div className=" flex items-center self-start">
          <span className="text-xl "> Gadgets & Electronics</span>  
          </div>
          <div className=" flex items-center self-start gap-3">
          <span className="text-xl text-orange-500 "> Offers</span> <FaGift className="text-xl text-orange-500" />
       
          </div>

          
          


        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavber;
