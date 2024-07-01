"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { addProductToCart, getProductById } from "@/Action/actions";
import Loading from "@/components/Loading";
import NotFound from "@/components/NotFound";
import Comment from "@/components/Comment";
import CommentList from "@/components/CommentList";
import dynamic from "next/dynamic";


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

const ProductPage = ({ params }: { params: { id: string } }) => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const maxQuantity = 5;

  const incrementQuantity = () => {
    if (quantity < maxQuantity) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const id = params.id;

      const products = await getProductById(id);
      if (!products.error) {
        setProduct(products);
      }
      setLoading(false);
    };
    getProduct();
  }, [params.id]);

  if (loading) {
    return <Loading />
  }

  if (!product) {
    return <NotFound />
  }

  const handleAddToCart = async () => {
    await addProductToCart(product.userId, product.id, quantity);
  };

  console.log(product.userId);
  return (
    <div className="container mx-auto p-5 bg-slate-100">
      <div className="flex flex-col md:flex-row gap-10 p-4 rounded-md bg-white">
        <div className="md:w-1/2 flex justify-center">
          <Image
            src={product.imageUrl[0] || "/product.webp"}
            alt={product.name}
            width={330}
            height={330}
            className="rounded-lg"
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-3xl font-semibold mb-2">{product.name}</h1>
          <p className="text-gray-600 mb-2">Product ID: {product.id}</p>
          <p className="text-xl font-semibold mb-2">
            ৳{product.discountprice || product.price}
          </p>
          {product.discount && (
            <p className="text-xl font-semibold text-red-500 mb-2">
              Discount: {product.discount}%
            </p>
          )}

          <div className="flex items-center mb-4">
            <button
              onClick={decrementQuantity}
              className="px-4 py-2 bg-gray-300 rounded-l-md"
            >
              -
            </button>
            <input
              type="text"
              value={quantity}
              readOnly
              className="w-12 text-center border-t border-b border-gray-300"
            />
            <button
              onClick={incrementQuantity}
              className="px-4 py-2 bg-gray-300 rounded-r-md"
            >
              +
            </button>
          </div>
          <p className="text-gray-600 mb-4">Availability: {product.quantity}</p>
          <div className="flex gap-4 mb-4">
            <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors duration-300">
              Buy Now
            </button>
            <button
              onClick={handleAddToCart}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
            >
              Add to Cart
            </button>
          </div>
          <p className="text-blue-500 cursor-pointer">Add to Wishlist</p>
        </div>
      </div>
      <div className="mt-10 bg-white p-3">
        <h2 className="text-2xl font-semibold mb-4">About this Item</h2>
        <h3 className="text-xl font-semibold mb-2">Description</h3>
        <p className="mb-4">{product.description}</p>
      
      </div>
      <div className="bg-white w-full h-full mt-2 py-3">
         <Comment />
        
      </div>
      <CommentList />
     
    </div>
  );
};


export default dynamic (() => Promise.resolve(ProductPage), {ssr: false})

