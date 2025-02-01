import React from "react";

function Footer() {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto py-5 flex gap-32">
        <div className="basis-1/2 text-[11rem] ">
          <h1 className="font-semibold leading-none tracking-tighter">
            refokus.
          </h1>
        </div>
        <div className="basis-1/2 flex gap-4">
          <div className="basis-1/3">
            <h4 className="mb-10 text-zinc-500 capitalize ">Socials</h4>
            {["instagram", "twitter", "youtube", "linkedin"].map(
              (item, index) => (
                <a className="block mt-2 capitalize text-zinc-600">{item}</a>
              )
            )}
          </div>
        </div>
        <div className="basis-1/2 flex">
          <div className="basis-1/3">
            <h4 className="mb-10 text-zinc-500 capitalize ">Socials</h4>
            {["instagram", "twitter", "youtube", "linkedin"].map(
              (item, index) => (
                <a className="block mt-2 capitalize text-zinc-600">{item}</a>
              )
            )}
          </div>
        </div>
        <div className="basis-1/2 flex flex-col items-center ">
          <p className="text-right">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, a
            sint?
          </p>
          <img className="w-32 mt-10"
            src="https://media.istockphoto.com/id/684195332/photo/refocus-word-watch.webp?a=1&b=1&s=612x612&w=0&k=20&c=ThUEUT_8kjeLFbgpFWhJJPLjcPttPzfyv2JPAOuLXio="
            alt="alt-image"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
