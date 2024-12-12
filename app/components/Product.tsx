import Image from "next/image";
import React from "react";

const Product = () => {
  return (
    <>
      <div>
        <h1>Product Title</h1>
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlndpwDalSNF8TzBG6T7kGv73l0IOReNJpKw&s"
          width={300}
          height={200}
          alt="Image of Product"
        />
        <h2>Product Price</h2>
        <h3>Product description</h3>
      </div>
    </>
  );
};

export default Product;
