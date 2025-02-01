import React from "react";
import Marquee from "./Marquee";

const Marquees = () => {
  var images = [

    "https://a.storyblok.com/f/240720/3848x443/1b41b56884/meltwater.webp/m/256x0",
    "https://a.storyblok.com/f/240720/720x261/6fc66dffad/figma-wordmark-white.webp/m/256x0",
    "https://a.storyblok.com/f/240720/2400x579/68c369be7c/google.webp/m/256x0",
    "https://a.storyblok.com/f/240720/2400x579/10d9af2daf/ipg.webp/m/256x0",
    "https://a.storyblok.com/f/240720/2400x579/7ba0fa3ed4/storyblok.webp/m/256x0",
    "https://a.storyblok.com/f/240720/2400x579/288d163b03/unilever.webp/m/256x0",
    "https://a.storyblok.com/f/240720/2400x579/0e6d88ad28/eneco.webp/m/256x0",
    "https://a.storyblok.com/f/240720/2400x579/71330ff74a/aesop.webp/m/256x0"
 
  ];

  return (
    <div className="py-20 ">
      <Marquee imagesUrls={images} />
    </div>
  );
};

export default Marquees;
