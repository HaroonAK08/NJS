import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <div>
        <div className="flex gap-6 bg-red-700 p-4 justify-center">
          <Link href="/" className="text-lg text-yellow-300">
            Home
          </Link>
          <Link href="/products" className="text-lg text-yellow-300">
            Products
          </Link>
          <Link href="/users" className="text-lg text-yellow-300">
            Users
          </Link>
          <Link href="/about" className="text-lg text-yellow-300">
            About
          </Link>
          <Link href="/contact" className="text-lg text-yellow-300">
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
