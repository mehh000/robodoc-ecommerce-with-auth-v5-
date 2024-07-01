//
"use client";

import Image from "next/image";
import { BiCartAdd } from "react-icons/bi";
import React, { useEffect, useState } from "react";
import { addProductToCart, getAllProducts } from "@/Action/actions";
import Link from "next/link";

interface Product {
  id: string;
  description: string;
  name: string;
  price: number;
  imageUrl: string[];
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  brend: string;
  category: string;
  sellprice: number | null;
  discountprice: number | null;
  discount: number | null;
}

const Card = () => {
  const [items, setItems] = useState<Product[]>([]);
  useEffect(() => {
    const getAllData = async () => {
      const itemData = await getAllProducts();
      if (!itemData.error) {
        setItems(itemData);
      }
    };
    getAllData();
  }, []);

  const handleAddToCart = async (id:string,userId:string) => {
    const quantity = 1
    console.log(id);
    console.log(userId);
   await addProductToCart(userId,id, quantity);
  };
  return (
    <div className="flex items-center w-full justify-center flex-wrap gap-10">
      {/* card start */}
      {items.map((item) => (
        <div key={item.id} className="relative">
          {item.discount && (
            <div className="absolute right-5 top-5 z-10 text-3xl text-orange-600 font-bold">
              {item.discount}% off
            </div>
          )}
          <div className="w-[350px] p-4 hover:border-slate-200 border-2 border-white  rounded-lg flex flex-col items-center ">
            <div className="flex flex-col items-center">
              <Link href={`/pages/product/${item.id}`}>
                {" "}
                <Image
                  src={item.imageUrl[0] || "/product.webp"}
                  alt={item.name}
                  width={330}
                  height={330}
                  className="rounded-lg"
                />{" "}
              </Link>
            </div>
            <div className="flex flex-col gap-10 mt-4 w-full">
              <Link href={`/pages/product/${item.id}`}>
                <h3 className="line-clamp-2 h-[2.35rem] cursor-pointer text-[0.813rem] font-normal leading-[1.25rem] text-grayDisplay-900 sm:h-[2.9rem] sm:text-[1.063rem] sm:leading-[1.563rem]">
                  {item.name}
                </h3>
              </Link>
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-5">
                  {item.discountprice && (
                    <p className="text-2xl font-semibold text-green-700 line-through">
                      {item.price} Taka
                    </p>
                  )}
                  <p className="text-2xl font-bold text-orange-600">
                    {item.discountprice ? item.discountprice : item.price} Taka
                  </p>
                </div>

                <button onClick={()=>handleAddToCart(item.id,item.userId)} className="w-full text-xl max-w-xs mt-2 px-4 py-2 font-semibold text-green-500 border-2 border-green-500 rounded-lg hover:bg-green-500 hover:text-white transition-colors duration-300 flex items-center justify-center gap-2">
                  <BiCartAdd className="text-3xl" /> Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
