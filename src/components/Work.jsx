import React from "react";

const Work = () => {
  var images = [
    {
      url: "https://media.istockphoto.com/id/684195332/photo/refocus-word-watch.webp?a=1&b=1&s=612x612&w=0&k=20&c=ThUEUT_8kjeLFbgpFWhJJPLjcPttPzfyv2JPAOuLXio=",
      top: "50%",
      left: "50%",
      isActive: true,
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1674081975809-ec3b522cf2be?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVmb2t1c3xlbnwwfHwwfHx8MA%3D%3D",
      top: "45%",
      left: "44%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/file-1707883121023-8e3502977149image?w=416&dpr=2&auto=format&fit=crop&q=60",
      top: "55%",
      left: "56%",
      isActive: false,
    }
  ];

  return (
    <div className="w-full">
      <div className="relative max-w-screen-xl mx-auto text-center">
        <h1 className="text-[30vw] leading-none tracking-light font-medium">
          work
        </h1>
       
        <div className="absolute inset-0 flex justify-center items-center">
          {images.map(
            (elem, index) =>
              elem.isActive && (
                <img
                  key={index}
                  className="absolute w-60 rounded-lg"
                  src={elem.url}
                  style={{ top: `calc(${elem.top} - 100px)`, left: elem.left }}
                  alt="alt-image-work"
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
