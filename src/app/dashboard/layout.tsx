"use client"
import React, { ReactNode } from "react";
import { User } from "lucide-react";
import { BiBell } from "react-icons/bi";
import "./../globals.css";
import {
  FaHome,
  FaBox,
  FaShoppingCart,
  FaUsers,
  FaChartBar,
  FaBullhorn,
  FaCog,
  FaUserShield,
  FaLifeRing,
  FaChartPie,
} from "react-icons/fa";
import { logout } from "@/Action/actions";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";


// Define the menu items
const menuItems = [
  { name: "Dashboard", path: "/dashboard", icon: FaHome },
  {
    name: "Products",
    icon: FaBox,
    subMenu: [
      { name: "All Products", path: "/dashboard/products/getproduct" },
      { name: "Add New Product", path: "/dashboard/products/new" },


    ],
  },
  {
    name: "Orders",
    icon: FaShoppingCart,
    subMenu: [
      { name: "All Orders", path: "/dashboard/orders" },
      { name: "Pending Orders", path: "/dashboard/orders/pending" },
      { name: "Completed Orders", path: "/dashboard/orders/completed" },
      { name: "Returned Orders", path: "/dashboard/orders/returned" },
    ],
  },
  {
    name: "Customers",
    icon: FaUsers,
    subMenu: [
      { name: "All Customers", path: "/dashboard/customers" },
      { name: "Customer Groups", path: "/dashboard/customers/groups" },
    ],
  },
  {
    name: "Reports",
    icon: FaChartBar,
    subMenu: [
      { name: "Sales Reports", path: "/dashboard/reports/sales" },
      { name: "Product Reports", path: "/dashboard/reports/products" },
      { name: "Customer Reports", path: "/dashboard/reports/customers" },
      { name: "Traffic Reports", path: "/dashboard/reports/traffic" },
    ],
  },
  {
    name: "Marketing",
    icon: FaBullhorn,
    subMenu: [
      { name: "Campaigns", path: "/dashboard/marketing/campaigns" },
      { name: "Discounts", path: "/dashboard/marketing/discounts" },
      { name: "Email Marketing", path: "/dashboard/marketing/email" },
    ],
  },
  {
    name: "Settings",
    icon: FaCog,
    subMenu: [
      { name: "General Settings", path: "/dashboard/settings/general" },
      { name: "Payment Settings", path: "/dashboard/settings/payment" },
      { name: "Shipping Settings", path: "/dashboard/settings/shipping" },
      { name: "Tax Settings", path: "/dashboard/settings/tax" },
      { name: "Notifications", path: "/dashboard/settings/notifications" },
    ],
  },
  {
    name: "User Management",
    icon: FaUserShield,
    subMenu: [
      { name: "User Roles", path: "/dashboard/users/roles" },
      { name: "User Accounts", path: "/dashboard/users/accounts" },
    ],
  },
  {
    name: "Support",
    icon: FaLifeRing,
    subMenu: [
      { name: "Support Tickets", path: "/dashboard/support/tickets" },
      { name: "FAQs", path: "/dashboard/support/faqs" },
    ],
  },
  {
    name: "Analytics",
    icon: FaChartPie,
    subMenu: [
      { name: "Google Analytics", path: "/dashboard/analytics/google" },
      { name: "Custom Analytics", path: "/dashboard/analytics/custom" },
    ],
  },
];

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {

  const session = useSession()
  console.log(session.status);
  // if (!session?.user) {
  //   redirect("/api/auth/signin");
  // }

  return (
    <div>
      <div className="w-full h-screen flex">
        <div className="w-1/5 bg-slate-800 h-full p-4">
          <nav>
            <ul className="space-y-2">
              {menuItems.map((item, index) => (
                <li key={index} className="group relative">
                  <a
                    href={item.path || "#"}
                    className="flex  items-center p-2 text-white hover:text-green-400 text-xl hover:bg-slate-600 rounded-md"
                  >
                    <item.icon className="mr-2" />
                    {item.name}
                  </a>
                  {item.subMenu && (
                    <ul className="absolute left-full z-50 top-0 hidden group-hover:block bg-slate-700 w-48 p-2 space-y-1 rounded-md">
                      {item.subMenu.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <a
                            href={subItem.path}
                            className="block p-2 text-xl text-white hover:bg-slate-600 rounded-md"
                          >
                            {subItem.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="w-4/5 flex flex-col h-full">
          <div className="bg-slate-100 flex items-center justify-between px-20 w-full h-20">
            <p className="text-2xl font-semibold text-slate-800">
              RoboDoc DashBoard
            </p>
            <div className="flex items-center gap-10">
              <div className="group relative">
                <User
                  size={50}
                  className="text-black border-2 hover:text-white hover:bg-green-500 border-green-500 p-2 rounded-full"
                />
                <div className="absolute p-2 left-0 top-12 hidden w-[130px] shadow-2xl group-hover:block bg-white rounded-lg" >
                 
                  <button onClick={()=>logout()}  className=" w-full cursor-pointer py-2 text-red-500 font-semibold text-xl hover:bg-red-500 hover:text-white border-2 hover:border-white border-green-400 rounded-lg flex items-center justify-center ">Log Out</button>
               
                </div>
              </div>

              <BiBell
                size={50}
                className="text-black border-2 hover:text-white hover:bg-blue-500 border-blue-500 p-2 rounded-full"
              />
            </div>
          </div>
          <div className=" bg-slate-100  w-full h-full overflow-y-scroll">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
