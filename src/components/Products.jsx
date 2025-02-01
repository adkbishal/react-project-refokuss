import React from "react";
import Product from "./Product";

function Products() {
  var products = [
    {
      title: "Zenyoga ",
      description:
        "The quick brown fox jumps over the lazy dog. This is Just a demo text!",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "This is a dummy description of the quick brown fox jumps over the lazy dog. This is Just a",
      live: true,
      case: true,
    },
    {
      title: "YYR 2025",
      description:
        "Fake description of the quick brown fox jumps over the lazy dog. This is Just a",
      live: true,
      case: true,
    },
    {
      title: "Yahoo!",
      description: "yuahoo descripot o just kidding okay do whatever you want",
      live: true,
      case: true,
    },
  ];
  return (
    <div className="mt-20">
      {products.map((val, index) => (
        <Product val={val} />
      ))}
    </div>
  );
}

export default Products;
