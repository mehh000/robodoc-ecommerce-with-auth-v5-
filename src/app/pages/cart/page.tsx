import Image from "next/image";
import React from "react";

const CartPage = () => {
  return (
    <div className="container mx-auto p-5 flex flex-col bg-slate-100 lg:flex-row gap-5">
      <div className="overflow-x-auto w-full lg:w-2/3 shadow-lg">
        <table className="min-w-full bg-white border">
          <thead className="bg-gray-200">
            <tr>
              <th className="w-1/4 p-3 text-left">Product</th>
              <th className="w-1/4 p-3 text-left">Price</th>
              <th className="w-1/4 p-3 text-left">Quantity</th>
              <th className="w-1/4 p-3 text-left">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            
            <tr className="border-b">
              <td className="p-3">
                <div className="flex items-center">
                  <Image
                    src="/product.webp"
                    height={94}
                    width={94}
                    alt="USB Heasfer Test Board"
                    className="w-24 h-24 object-cover mr-4"
                  />
                  <span className="line-clamp-2">
                    USB Head Switchboard Male Connector to Type-C Micro Female USB 2.54-4P Transfer Test Board
                  </span>
                </div>
              </td>
              <td className="p-3">৳120.51</td>
              <td className="p-3">1</td>
              <td className="p-3">৳120.51</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="w-full lg:w-1/3 shadow-lg">
        <div className="bg-gray-100 p-5 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-3">
            <span>Sub Total</span>
            <span>৳144.1</span>
          </div>
          <div className="flex justify-between mb-3">
            <span>Shipping Cost</span>
            <span>৳0</span>
          </div>
          <div className="flex justify-between mb-3 font-semibold">
            <span>Total Amount</span>
            <span>৳144.1</span>
          </div>
          <div className="mt-5">
            <input
              type="text"
              placeholder="Enter your coupon code"
              className="w-full p-2 border rounded-md mb-3"
            />
            <button className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors duration-300">
              Apply
            </button>
            <p className="text-sm mt-2">
              * Please <a href="/login" className="text-blue-500">Sign In</a> to apply coupon
            </p>
          </div>
          <button className="w-full bg-blue-500 text-white py-2 rounded-md mt-5 hover:bg-blue-600 transition-colors duration-300">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
