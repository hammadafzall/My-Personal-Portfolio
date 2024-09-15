import Tools from "./Tools";
export default function Skills() {
  return (
    <>
      <h3 className="text-2xl md:text-3xl ml-5 bg-gradient-to-r from-blue-500 via-red-500 to-blue-900 bg-clip-text text-transparent font-black w-96 ">
        Technologies I Know
      </h3>
      <div className="flex flex-col xl:items-start xl:justify-start xl:ml-0 xl:flex-row mt-6">
        <ul className="flex flex-col w-full h-96">
          {Tools.slice(0, 6).map((tool, index) => (
            <li
              key={index}
              className="w-full h-full flex flex-col items-start justify-start py-2"
            >
              <p className="text-zinc-300 absolute">{tool.skill}</p>
              <div className="bg-gray-300 rounded-full w-full h-1 relative max-w-2xl mt-8">
                <div
                  className={`h-full rounded-full bg-blue-600 ${tool.widthClass}`}
                ></div>
                <p className="text-sm text-blue-500 font-bold absolute right-0 -top-6">
                  {tool.knowledge}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <ul className="flex flex-col w-full h-96">
          {Tools.slice(6).map((tool, index) => (
            <li
              key={index}
              className="w-full h-full flex flex-col items-start justify-start py-2"
            >
              <p className="text-zinc-300 absolute">{tool.skill}</p>
              <div className="bg-gray-300 rounded-full w-full h-1 relative max-w-2xl mt-8">
                <div
                  className={`h-full rounded-full bg-blue-600 ${tool.widthClass}`}
                ></div>
                <p className="text-sm text-blue-500 font-bold absolute right-0 -top-6">
                  {tool.knowledge}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
