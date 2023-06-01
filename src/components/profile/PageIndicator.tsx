"use client";
import { useState } from "react";
import Image from "next/image";
export default function MyComponent() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div className="flex-col space-y-4">
        <div className="flex space-x-3">
          <Image
            src="/profile/profile_page.svg" // Replace with the actual path to your image
            alt="Clickable Image"
            style={{
              cursor: "pointer",
              filter: isActive ? "none" : "grayscale(100%)",
            }}
            width={24}
            height={24}
            onClick={handleClick}
          />
          <h1 style={{ color: isActive ? "#5F72FF" : "gray" }}>Profil saya</h1>
        </div>
        <div className="flex space-x-3">
          <Image
            src="/profile/wishlist.svg" // Replace with the actual path to your image
            alt="Clickable Image"
            style={{
              cursor: "pointer",
              filter: isActive ? "none" : "grayscale(100%)",
            }}
            width={24}
            height={24}
            onClick={handleClick}
          />
          <h1 style={{ color: isActive ? "#5F72FF" : "gray" }}>Wishlist</h1>
        </div>
        <div className="flex space-x-3">
          <Image
            src="/profile/cart.svg" // Replace with the actual path to your image
            alt="Clickable Image"
            style={{
              cursor: "pointer",
              filter: isActive ? "none" : "grayscale(100%)",
            }}
            width={24}
            height={24}
            onClick={handleClick}
          />
          <h1 style={{ color: isActive ? "#5F72FF" : "gray" }}>Cart</h1>
        </div>
      </div>
    </>
  );
}
