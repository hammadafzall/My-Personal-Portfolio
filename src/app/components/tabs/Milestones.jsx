// components/Milestones.js
export default function Milestones() {
  return (
    <>
      <h3 className="text-2xl md:text-3xl ml-5 bg-gradient-to-r from-blue-500 via-red-500 to-blue-900 bg-clip-text text-transparent font-black w-80 ">
        Career & Academics
      </h3>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 md:gap-36 w-full overflow-hidden md:w-full md:ml-0 h-full">
        <div className="mt-12 w-96 text-center">
          <h1 className="text-2xl text-zinc-200 mb-8">Education</h1>
          <ul className="relative border-l-4 border-blue-600 bg-[#1A1A1A]  text-gray-600 font-sans mx-auto px-8 py-8 max-w-lg">
            <li className="relative border-b border-dashed border-gray-400 py-4 last:border-none">
              <div className="absolute -left-[40.9px] top-5 bg-blue-600 rounded-full h-4 w-4"></div>
              <div className=" flex flex-col items-start">
                <h5 className="text-xl font-bold mb-2">
                  Bs(Hons) Computer Science
                </h5>
                <p>Government College University, Faisalabad</p>
                <span className="text-gray-400 text-sm font-light w-full text-left "></span>
              </div>
            </li>
            <li className="relative border-b border-dashed border-gray-400 py-4 last:border-none">
              <div className="absolute -left-[40.9px] top-3 bg-blue-600 rounded-full h-4 w-4"></div>
              <div className=" flex flex-col items-start">
                <h3 className="text-xl font-bold mb-2">
                  MSc. Digital Marketing
                </h3>
                <p>Oxford Brookes University, Oxford</p>
                <span className="text-gray-400 text-sm font-light w-full text-left"></span>
              </div>
            </li>
            <li className="relative border-b border-dashed border-gray-400 py-4 last:border-none">
              <div className="absolute -left-[40.9px] top-5 bg-blue-600 rounded-full h-4 w-4"></div>
              <div className=" flex flex-col items-start">
                <h3 className="text-xl text-left font-bold mb-2">
                  MSc International Business
                  <br /> with Data Analytics
                </h3>
                <p>Ulster University, Birmingham</p>
                <span className="text-gray-400 text-sm font-light w-full text-left"></span>
              </div>
            </li>
          </ul>
        </div>
        <div className=" mt-12 w-96 text-center">
          <h1 className="text-2xl text-zinc-200 mb-8">Experience</h1>
          <ul className="relative border-l-4 border-blue-600 bg-[#1A1A1A]  text-gray-600 font-sans mx-auto px-8 py-8 max-w-lg">
            <li className="relative border-b border-dashed border-gray-400 py-4 last:border-none">
              <div className="absolute -left-[40.9px] top-5 bg-blue-600 rounded-full h-4 w-4"></div>
              <div className=" flex flex-col items-start">
                <h3 className="text-xl font-bold mb-2">
                  Front-end Developer Intern
                </h3>
                <p>Convent Generation IT</p>
                <span className=" text-gray-400 text-sm font-light w-full text-left ">
                  June, 2019 - August, 2019
                </span>
              </div>
            </li>
            <li className="relative border-b border-dashed border-gray-400 py-4 last:border-none">
              <div className="absolute -left-[40.9px] top-5 bg-blue-600 rounded-full h-4 w-4"></div>
              <div className=" flex flex-col items-start">
                <h3 className="text-xl font-bold mb-2">
                  Junior Front-end Developer
                </h3>
                <p>Convent Generation IT</p>
                <span className=" text-gray-400 text-sm font-light w-full text-left ">
                  September,2019 - May 2020
                </span>
              </div>
            </li>
            <li className="relative border-b border-dashed border-gray-400 py-4 last:border-none">
              <div className="absolute -left-[40.9px] top-5 bg-blue-600 rounded-full h-4 w-4"></div>
              <div className=" flex flex-col items-start">
                <h3 className="text-xl font-bold mb-2">Web Developer</h3>
                <p>Self Employeed</p>
                <span className=" text-gray-400 text-sm font-light w-full text-left">
                  May 2020 - Current
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
