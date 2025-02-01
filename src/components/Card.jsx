
function Card({ width, start, para, hover }) {
  return (
    <div className={`bg-gray-700 text-white border-2 gap-3 p-5 rounded-xl ${hover} ${width} min-h-[30rem] flex flex-col items-center justify-between`}>
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <h3>One heading</h3>
        </div>
        <h1 className="text-3xl mt-5">Heading 1</h1>
      </div>
      <div className="down w-full">
        {start && (
          <>
            <h1 className="text-6xl font-semibold tracking-tight leading-none">
              Start Project
            </h1>
            <button className="rounded-full mt-5 py-2 px-5 border-[1px] border-zinc-50">
              Contact Us
            </button>
          </>
        )}
        {para && (
          <p className="text-sm text-zinc-500">
            Lorem, ipsum dolor sit amet consectetur adipisicing.
          </p>
        )}
      </div>
    </div>
  );
}

export default Card;  
