import React from "react";

function Stripe({ val }) {
  return (
    <div className="w-[16.66%] px-10 py-5 border-t-[1.2px] border-b-[1.2px] flex justify-between items-center border-r-2 border-zinc-700">
      <img
        src={val.url}
        alt="Stripe Image"
        className="w-16 h-16 object-cover"
      />
      <span className="font-semibold">{val.number}</span>
    </div>
  );
}

export default Stripe;
