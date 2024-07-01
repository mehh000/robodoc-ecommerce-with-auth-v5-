"use client";
import React, { useEffect, useState } from "react";
import { getUserById } from "@/Action/actions";
import { User } from "@prisma/client";
import { useForm } from "react-hook-form";
import Image from "next/image";

const Profile = ({ id }: { id: string }) => {
  const [data, setData] = useState<User | null>(null);
  const { register, setValue, handleSubmit } = useForm<User>();

  useEffect(() => {
    const getUser = async () => {
      const userData = await getUserById(id);
      setData(userData);
    };
    getUser();
  }, [id]);

  useEffect(() => {
    if (data) {
      // Setting the form values
      Object.keys(data).forEach((key) => {
        setValue(key as keyof User, data[key as keyof User]);
      });
    }
  }, [data, setValue]);

  const onSubmit = async (formData: User) => {
    console.log(formData);
    // Here you can handle the form submission to update user profile
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-5 flex flex-col items-center">
      <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-5">
        <div className="flex justify-center mb-5">
          <Image
          height={128}
          width={128}
            src={data.image || "/user.png"}
            alt="User Profile"
            className="w-32 h-32 object-cover rounded-full border"
          />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              {...register("name")}
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              {...register("email")}
              type="email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Number</label>
            <input
              {...register("number")}
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Location</label>
            <input
              {...register("location")}
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">City</label>
            <input
              {...register("city")}
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Landmark</label>
            <input
              {...register("landmark")}
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <input
              {...register("address")}
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Gender</label>
            <input
              {...register("gender")}
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
