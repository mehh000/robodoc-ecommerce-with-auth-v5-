"use client";
import { deleteProduct, getAllProducts } from "@/Action/actions";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";

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

const Getpro = () => {
  const [items, setItems] = useState<Product[]>([]);

  useEffect(() => {
    const getAllData = async () => {
      const itemData = await getAllProducts();
      if (!itemData.error) {
        setItems(itemData);
      }
    };
    getAllData();
  }, [deleteProduct]);

  const session = useSession()
  if (!session?.user) {
    redirect("/api/auth/signin");
  }


  return (
    <div>
      <div className="flex flex-wrap gap-2  ">
        {items.map((item) => (
          <div key={item.id} className="relative">
            {item.discount && (
              <div className="absolute right-5 top-5 z-10 text-3xl text-orange-600 font-bold">
                {item.discount}% off
              </div>
            )}
            <div className="w-[350px] p-4 hover:border-slate-200 border-2 bg-white border-white h-fit rounded-lg flex flex-col items-center">
              <div className="flex flex-col items-center">
                <Image
                  src={item.imageUrl[0] || "/product.webp"}
                  alt={item.name}
                  width={150}
                  height={150}
                  className="rounded-lg object-contain container"
                />
              </div>
              <div className="flex flex-col gap-10 mt-4 w-full">
                <h3 className="line-clamp-2 h-[2.35rem] cursor-pointer text-[0.813rem] font-normal leading-[1.25rem] text-grayDisplay-900 sm:h-[2.9rem] sm:text-[1.063rem] sm:leading-[1.563rem]">
                  {item.description}
                </h3>
                <div className="flex flex-col items-center">
                  {item.discountprice && (
                    <p className="text-2xl font-semibold text-green-700 line-through">
                      {item.price} Taka
                    </p>
                  )}
                  <p className="text-2xl font-bold text-orange-600">
                    {item.discountprice ? item.discountprice : item.price} Taka
                  </p>
                  <div className="w-full text-xl max-w-xs mt-2 font-semibold rounded-lg flex items-center">
                    <Link href={`/dashboard/products/update/${item.id}`}>
                      {" "}
                      <button className="p-2 text-center w-full text-xl text-white hover:bg-green-700 bg-green-500">
                        Edit
                      </button>{" "}
                    </Link>
                    <button className="p-2 text-center w-full text-xl text-white hover:bg-blue-700 bg-blue-500">
                      View
                    </button>
                    <button
                      onClick={() => deleteProduct(item.id)}
                      className="p-2 text-center w-full text-xl text-white hover:bg-red-700 bg-red-500"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Getpro;
