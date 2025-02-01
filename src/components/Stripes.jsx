import React from "react";
import Stripe from "./Stripe";

function Stripes() {
  var data = [
    {
      url: "https://plus.unsplash.com/premium_photo-1669584523537-bcad5027a07f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3RyaXBlc3xlbnwwfHwwfHx8MA%3D%3D",
      number: 12,
    },
    {
      url: "https://images.unsplash.com/photo-1593893327083-30e6b37cd44d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RyaXBlc3xlbnwwfHwwfHx8MA%3D%3D",
      number: 122,
    },
    {
      url: "https://images.unsplash.com/photo-1628331507643-ddf8016ca45d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHN0cmlwZXN8ZW58MHx8MHx8fDA%3D",
      number: 121,
    },
    {
      url: "https://images.unsplash.com/photo-1551026921-2141449d9fb6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHN0cmlwZXN8ZW58MHx8MHx8fDA%3D",
      number: 120,
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1681256187547-d426abd2fcc6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHN0cmlwZXN8ZW58MHx8MHx8fDA%3D",
      number: 11,
    },
    {
      url: "https://images.unsplash.com/photo-1524082983062-21c24967d6c9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHN0cmlwZXN8ZW58MHx8MHx8fDA%3D",
      number: 16,
    },
  ];

  return (
    <div className="flex items-center justify-between ">
      {data.map((elem, index) => (
        <Stripe key={index} val={elem} />
      ))}
    </div>
  );
}   

export default Stripes;
