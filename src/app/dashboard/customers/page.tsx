"use client";

import { daleteUser, getUsers } from "@/Action/actions";
import { User } from "@prisma/client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Trash } from "lucide-react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const Customarse = () => {
  const [users, setUsers] = useState<User>([]);
  useEffect(() => {
    const allUsers = async () => {
      const users = await getUsers();
      console.log(users);
      setUsers(users);
    };
    allUsers();
  }, []);

  const session = useSession()
  if (!session?.user) {
    redirect("/api/auth/signin");
  }

  return (
    <div className="flex   h-full bg-slate-200 w-full">
      {/* customar table */}
      <div className="w-full  ">
        <div className="overflow-x-auto w-full lg:w-2/3 shadow-lg flex items-center mx-auto  justify-center">
        {users.map((item)=>( 
          <table key={item.id} className="min-w-full bg-white border">
            <thead className="bg-gray-200">
              <tr>
                <th className="w-1/4 p-3 text-left">Image</th>
                <th className="w-1/4 p-3 text-left">Name</th>
                <th className="w-1/4 p-3 text-left">Role</th>
                <th className="w-1/4 p-3 text-left">Email</th>
                <th className="w-1/4 p-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3">
                  <Image
                    src={item.image || "/user.png"}
                    height={94}
                    width={94}
                    alt="USB Heasfer Test Board"
                    className="w-24 h-24 object-cover mr-4 rounded-full"
                  />
                </td>
                <td className="p-3 font-medium "> {item.name} </td>
                <td className="p-3"> {item.role} </td>
                <td className="p-3"> {item.email} </td>
                <td className="p-3"> < Trash size={40} onClick={()=>daleteUser(item.id)} className="p-2 text-red-500 hover:text-white font-semibold border-2 rounded-full hover:bg-red-500 border-red-500" /> </td>
              </tr>
            </tbody>
          </table> ))}
        </div>
      </div>
    </div>
  );
};

export default Customarse;
