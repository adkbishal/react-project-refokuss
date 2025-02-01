import React from "react";

function Marquee({ imagesUrls }) {
  return (
    <div className="flex flex-wrap w-full py-8 gap-20 whitespace-nowrap overflow-hidden ">
      {imagesUrls.map((url, index) => (
        <img key={`first-${index}`} src={url} className="w-[7vw] flex-shrink-0" alt={`image-${index}`} />
      ))}
      {imagesUrls.map((url, index) => (
        <img key={`second-${index}`} src={url} className="w-[7vw] flex-shrink-0" alt={`image-${index}`} />
      ))}
    </div>
  );
}

export default Marquee;
