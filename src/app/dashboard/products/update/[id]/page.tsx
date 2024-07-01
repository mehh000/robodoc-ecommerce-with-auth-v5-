"use client";

import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { addProduct, getProductById, updateProduct } from "@/Action/actions";
import { Product } from "@prisma/client";

interface IFormInput {
  description: string;
  name: string;
  price: number;
  quantity: number;
  brend: string;
  category: string;
  sellprice?: number;
  discountprice?: number;
  discount?: number;
}

const ProductForm: React.FC = ({ params }) => {
  const [img, setImg] = useState<any>(null);
  const [productData, setProductData] = useState<Product | null>(null);
  const session = useSession();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IFormInput>();
  const id = params.id;

  useEffect(() => {
    const getProduct = async () => {
      const product = await getProductById(id);

      setProductData(product);
      console.log(productData);
      setValue("name", product.name);
      setValue("description", product.description);
      setValue("price", product.price);
      setValue("quantity", product.quantity);
      setValue("brend", product.brend);
      setValue("category", product.category);
      setValue("sellprice", product.sellprice);
      setValue("discountprice", product.discountprice);
      setValue("discount", product.discount);

      return product;
    };

    getProduct();
  }, []);

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    console.log(id);

    if (img && img.secure_url) {
      console.log(id);
      const imageUrl = img.secure_url ;
      const updateData = { ...data, imageUrl }; 

      await updateProduct(id, updateData);
    }
     else {
      console.log(id);
      const imageUrl = productData.imageUrl;
      const updateData = { ...data, imageUrl };
      await updateProduct(id, updateData);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 ">
      <h2 className="text-2xl font-bold mb-6">Up Product</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
      >
        <div className="flex flex-col gap-4 items-center">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Add Image
          </label>
          <div className="flex items-center flex-col gap-5">
            <CldUploadWidget
              uploadPreset="social"
              onSuccess={(result, { widget }) => {
                setImg(result.info);
                widget.close();
              }}
            >
              {({ open }) => (
                <button
                  className="p-2 text-center   bg-green-500 text-white hover:bg-green-700"
                  type="button"
                  onClick={() => open()}
                >
                  Upload an Image
                </button>
              )}
            </CldUploadWidget>
            <Image
              src={img?.secure_url || productData?.imageUrl[0] || "/logo.webp"}
              alt="img"
              height={120}
              width={120}
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            {...register("description", { required: true })}
            className="mt-1 block   w-[400px] h-[200px] text-2xl p-2 shadow-sm sm:text-sm  bg-white rounded-md"
          />
          {errors.description && (
            <span className="text-red-500 text-sm">
              Description is required
            </span>
          )}
        </div>
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: true })}
            className="mt-1 block w-full text-2xl p-2 shadow-sm sm:text-sm  bg-white rounded-md"
          />
          {errors.name && (
            <span className="text-red-500 text-sm">Name is required</span>
          )}
        </div>
        <div>
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700"
          >
            Price
          </label>
          <input
            type="number"
            id="price"
            {...register("price", { required: true })}
            className="mt-1 block   w-full text-2xl p-2 shadow-sm sm:text-sm  bg-white rounded-md"
          />
          {errors.price && (
            <span className="text-red-500 text-sm">Price is required</span>
          )}
        </div>
        <div>
          <label
            htmlFor="quantity"
            className="block text-sm font-medium text-gray-700"
          >
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            {...register("quantity", { required: true })}
            className="mt-1 block w-full text-2xl p-2 shadow-sm sm:text-sm  bg-white rounded-md"
          />
          {errors.quantity && (
            <span className="text-red-500 text-sm">Quantity is required</span>
          )}
        </div>
        <div>
          <label
            htmlFor="brend"
            className="block text-sm font-medium text-gray-700"
          >
            Brend
          </label>
          <input
            type="text"
            id="brend"
            {...register("brend", { required: true })}
            className="mt-1 block w-full text-2xl p-2 shadow-sm sm:text-sm  bg-white rounded-md"
          />
          {errors.brend && (
            <span className="text-red-500 text-sm">Brend is required</span>
          )}
        </div>
        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700"
          >
            Category
          </label>
          <input
            type="text"
            id="category"
            {...register("category", { required: true })}
            className="mt-1 block   w-full text-2xl p-2 shadow-sm sm:text-sm  bg-white rounded-md"
          />
          {errors.category && (
            <span className="text-red-500 text-sm">Category is required</span>
          )}
        </div>
        <div>
          <label
            htmlFor="sellprice"
            className="block text-sm font-medium text-gray-700"
          >
            Sell Price (optional)
          </label>
          <input
            type="number"
            id="sellprice"
            {...register("sellprice")}
            className="mt-1 block w-full text-2xl p-2 shadow-sm sm:text-sm  bg-white rounded-md"
          />
        </div>
        <div>
          <label
            htmlFor="discountprice"
            className="block text-sm font-medium text-gray-700"
          >
            Discount Price (optional)
          </label>
          <input
            type="number"
            id="discountprice"
            {...register("discountprice")}
            className="mt-1 block w-full text-2xl   p-2 shadow-sm sm:text-sm  bg-white rounded-md"
          />
        </div>
        <div>
          <label
            htmlFor="discount"
            className="block   text-sm font-medium text-gray-700"
          >
            Discount (optional)
          </label>
          <input
            type="number"
            id="discount"
            {...register("discount")}
            className="mt-1 block w-full text-2xl p-2   shadow-sm sm:text-sm  bg-white rounded-md"
          />
        </div>
        <div className="sm:col-span-2">
          <button
            type="submit"
            className="inline-flex justify-center   py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Update Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
