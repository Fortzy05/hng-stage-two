"use client"

import React, { useState } from "react";
import Link from "next/link";
import { products } from "./ProductData";

function ShoppingPage() {
  const [cart, setCart] = useState(
    products.map((product) => ({ ...product, quantity: 0 }))
  );

  const handleQuantityChange = (id, increment) => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.id === id
          ? { ...product, quantity: Math.max(product.quantity + increment, 0) }
          : product
      )
    );
  };

  return (
    <div className=" px-20 w-full grid md:grid-cols-4 grid-cols-2 gap-5">
      {cart.map((product) => (
        <div
          key={product.id}
          className="w-full border border-[#AC702F] py-2 px-[1rem] rounded-lg"
        >
          <div className="flex items-center justify-center">
            <img src={product.Image} alt={product.model} className="w-full" />
          </div>

          <h1 className="md:text-lg text-sm font-semibold mt-4">
            {product.type}
          </h1>

          <h2 className="md:text-base text-sm text-[#334155] mt-2 text-nowrap md:text-clip truncate">
            {product.model}
          </h2>

          <p className="md:text-md text-sm text-[#94A3B8] mt-2 break-all md:text-nowrap truncate md:text-clip">
            {product.description}
          </p>

          <h4 className="md:text-2xl text-xl font-semibold text-[#0F172A]">
            {product.price}
          </h4>

          <div className="flex items-center gap-2">
            <img
              src={product.rating}
              alt="rating"
              className="md:w-[7rem] w-[5rem] h-5"
            />
            <p className="md:text-base text-xs text-[#334155]">
              {product.Number}
            </p>
          </div>

          <h5 className="md:text-sm text-xs text-gray-500 mt-5">
            <span className="font-bold text-[#AC702F]">{product.stock}</span>{" "}
            left in stock
          </h5>

          <div className="md:flex grid mt-2 md:gap-[.2rem] gap-2">
            <div className=" items-center border border-[#AC702F] md:text-base md:block hidden text-xs md:py-1 md:px-[.8px] rounded-[6px]">
              <button onClick={() => handleQuantityChange(product.id, -1)}>
                -
              </button>
              <span className="px-2">{product.quantity}</span>
              <button onClick={() => handleQuantityChange(product.id, 1)}>
                +
              </button>
            </div>
            <Link
              href="/cartpage"
              className="border text-center md:text-base text-xs rounded-2xl md:py-1 py-1.5 md:px-2 bg-[#AC702F] border-[#AC702F] text-white"
            >
              Add to Cart
            </Link>
            <Link
              href="/checkoutpage"
              className="border md:text-base text-xs text-center border-[#AC702F] md:py-1 py-1.5 md:px-1 rounded-2xl"
            >
              Buy now
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShoppingPage;
