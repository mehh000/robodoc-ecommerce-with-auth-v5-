import React from "react";
import {
  FaDollarSign,
  FaUser,
  FaShoppingCart,
  FaTruck,
  FaBoxOpen,
  FaChartLine,
  FaUsers,
} from "react-icons/fa";
import { IconType } from "react-icons";
import { auth } from "../../../auth";
import { redirect } from "next/navigation";

// Define the type for the demo data items
type DashboardData = {
  title: string;
  value: string;
  icon: IconType;
  color: string;
};

// Fake demo data
const demoData: DashboardData[] = [
  {
    title: "This Month's Sales",
    value: "$5,000",
    icon: FaDollarSign,
    color: "bg-blue-500",
  },
  {
    title: "Monthly Earnings",
    value: "$20,000",
    icon: FaDollarSign,
    color: "bg-green-500",
  },
  {
    title: "Today's Earnings",
    value: "$500",
    icon: FaDollarSign,
    color: "bg-yellow-500",
  },
  {
    title: "Today's Sales",
    value: "50",
    icon: FaShoppingCart,
    color: "bg-purple-500",
  },
  {
    title: "Total Customers",
    value: "1,200",
    icon: FaUsers,
    color: "bg-pink-500",
  },
  {
    title: "Today's Orders",
    value: "30",
    icon: FaShoppingCart,
    color: "bg-indigo-500",
  },
  {
    title: "Monthly Orders",
    value: "300",
    icon: FaShoppingCart,
    color: "bg-teal-500",
  },
  {
    title: "Today's Delivered",
    value: "25",
    icon: FaTruck,
    color: "bg-red-500",
  },
  { title: "Pending", value: "5", icon: FaBoxOpen, color: "bg-gray-500" },
  { title: "Refund", value: "2", icon: FaBoxOpen, color: "bg-orange-500" },
  {
    title: "Today's New Customers",
    value: "10",
    icon: FaUser,
    color: "bg-blue-300",
  },
  {
    title: "Traffic Rate",
    value: "75%",
    icon: FaChartLine,
    color: "bg-green-300",
  },
  {
    title: "Today's Bad Reports",
    value: "3",
    icon: FaBoxOpen,
    color: "bg-red-300",
  },
  {
    title: "Monthly Reports",
    value: "10",
    icon: FaBoxOpen,
    color: "bg-yellow-300",
  },
];

// Define the type for the DashboardCard props
type DashboardCardProps = {
  title: string;
  value: string;
  icon: IconType;
  color: string;
};

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  value,
  icon: Icon,
  color,
}) => (
  <div className="flex items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <div className={`p-3 rounded-full ${color}`}>
      <Icon className="text-white w-6 h-6" />
    </div>
    <div className="ml-4">
      <h2 className="text-lg font-semibold text-gray-700">{title}</h2>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
    </div>
  </div>
);

const Dashboard: React.FC = async () => {
  const session = await auth();
  if (!session?.user) {
    redirect("/api/auth/signin");
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      {demoData.map((data, index) => (
        <DashboardCard
          key={index}
          title={data.title}
          value={data.value}
          icon={data.icon}
          color={data.color}
        />
      ))}
    </div>
  );
};

export default Dashboard;
