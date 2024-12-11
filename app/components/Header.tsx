import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <div>
        <div className="flex gap-6 bg-red-700 p-4 justify-center">
          <Link href="/" className="text-lg">
            Home
          </Link>
          <Link href="/about" className="text-lg">
            About
          </Link>
          <Link href="/contact" className="text-lg">
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
