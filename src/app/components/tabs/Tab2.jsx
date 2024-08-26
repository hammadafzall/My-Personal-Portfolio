// "use client";
// import { useState } from "react";
// import Tools from "./Skills";

// export default function Tabs() {
//   const [activeTab, setActiveTab] = useState("about");

//   const tabs = [
//     { id: "about", label: "About" },
//     { id: "skill", label: "Skills" },
//     { id: "education", label: "Milestones" },
//   ];

//   return (
//     <section className="font-sans p-4 pb-20 flex flex-col justify-center items-center w-full h-full  bg-[#1A1A1A]  ">
//       <ul className="flex gap-2 w-auto bg-[#1A1A1A] p-1 mt-10 rounded-full shadow-[0_2px_8px_-1px_rgba(6,81,237,0.4)]">
//         {tabs.map((tab) => (
//           <li
//             key={tab.id}
//             onClick={() => setActiveTab(tab.id)}
//             className={` text-center text-sm font-bold py-3 px-6 rounded-full tracking-wide cursor-pointer ${
//               activeTab === tab.id ? "text-white bg-blue-600" : "text-gray-500"
//             }`}
//           >
//             {tab.label}
//           </li>
//         ))}
//       </ul>

//       {activeTab === "about" && (
//         <div id="homeContent" className=" w-full h-full block mt-8">
//           <h4 className="text-lg font-bold text-gray-600">About</h4>
//           <About />
//         </div>
//       )}

//       {activeTab === "skill" && (
//         <div id="settingContent" className=" w-full h-full block mt-8">
//           <h4 className="text-lg font-bold text-gray-600">Skills</h4>
//           <Skills />
//         </div>
//       )}

//       {activeTab === "education" && (
//         <div id="profileContent" className=" w-full h-full block mt-8">
//           <h4 className="text-lg font-bold text-gray-600">
//             Education/Experience
//           </h4>
//           <Milestones />
//         </div>
//       )}
//     </section>
//   );
// }

// function About() {
//   return (
//     <div className="  sm:px-6 p-4 w-full h-full ">
//       <div>
//         <h3 className="text-6xl font-bold text-gray-800">Little about me,</h3>
//         <div className="mt-4">
//           <p className="text-gray-500 text-lg leading-10  ">
//             I’m a Software Developer with nearly two years of experience
//             specializing in front-end development and a solid foundation in
//             backend technologies. Over the past year as a Freelance Web
//             Developer, I’ve created visually engaging and user-friendly websites
//             for various clients. Previously, I spent eight months at Convent
//             Generation IT as a Junior Web Developer, where I worked on
//             responsive web pages and collaborated closely with senior developers
//             on key projects. I’m passionate about building seamless digital
//             experiences and am committed to delivering high-quality work that
//             meets both client and user needs.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// function Skills() {
//   return (
//     <div className="flex flex-col xl:items-start xl:justify-start xl:ml-0 xl:flex-row mt-6">
//       <ul className="flex flex-col  w-full h-96">
//         {Tools.slice(0, 7).map((tool, index) => (
//           <li
//             key={index}
//             className="w-full h-full flex flex-col  items-start justify-start py-2"
//           >
//             <p className="text-zinc-300 absolute">{tool.skill}</p>
//             <div className="bg-gray-300 rounded-full w-full h-1 relative max-w-2xl mt-8">
//               <div
//                 className={`h-full rounded-full bg-blue-600 ${tool.widthClass}`}
//               ></div>
//               <p className="text-sm text-blue-500 font-bold absolute right-0 -top-6">
//                 {tool.knowledge}
//               </p>
//             </div>
//           </li>
//         ))}
//       </ul>
//       <ul className="flex flex-col w-full h-96">
//         {Tools.slice(7).map((tool, index) => (
//           <li
//             key={index}
//             className="w-full h-full flex flex-col  items-start justify-start py-2"
//           >
//             <p className="text-zinc-300 absolute">{tool.skill}</p>
//             <div className="bg-gray-300 rounded-full w-full h-1 relative max-w-2xl mt-8">
//               <div
//                 className={`h-full rounded-full bg-blue-600 ${tool.widthClass}`}
//               ></div>
//               <p className="text-sm text-blue-500 font-bold absolute right-0 -top-6">
//                 {tool.knowledge}
//               </p>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function Milestones() {
//   return (
//     <div className=" flex flex-col lg:flex-row justify-center items-center gap-10 md:gap-36 w-full overflow-hidden md:w-full md:ml-0 h-full">
//       <div id="timeline-content" className="mt-12 text-center ">
//         <h1 className="text-2xl text-zinc-200 mb-8">Expereience</h1>

//         <ul className="relative border-l-4 border-blue-600 bg-[#1A1A1A]  text-gray-600 font-sans  px-8 py-8 max-w-lg">
//           <li className="relative border-b border-dashed border-gray-400 py-4 last:border-none">
//             <div className="absolute -left-[40.9px] top-5 bg-blue-600 rounded-full h-4 w-4"></div>
//             <div className=" flex flex-col items-start">
//               <h3 className="text-xl font-bold mb-2">Web Development Intern</h3>
//               <p>Convent Generation IT</p>
//               <span className=" text-gray-400 text-sm font-light w-full text-left ">
//                 June, 2019 - August, 2019
//               </span>
//             </div>
//           </li>
//           <li className="relative border-b border-dashed border-gray-400 py-4 last:border-none">
//             <div className="absolute -left-[40.9px] top-5 bg-blue-600 rounded-full h-4 w-4"></div>
//             <div className=" flex flex-col items-start">
//               <h3 className="text-xl font-bold mb-2">Junior Web Developer</h3>
//               <p>Convent Generation IT</p>
//               <span className=" text-gray-400 text-sm font-light w-full text-left ">
//                 August,2019 -January 2020
//               </span>
//             </div>
//           </li>
//           <li className="relative border-b border-dashed border-gray-400 py-4 last:border-none">
//             <div className="absolute -left-[40.9px] top-5 bg-blue-600 rounded-full h-4 w-4"></div>
//             <div className=" flex flex-col items-start">
//               <h3 className="text-xl font-bold mb-2">Web Developer</h3>
//               <p>Self Employeed</p>
//               <span className=" text-gray-400 text-sm font-light w-full text-left">
//                 May 2023 - Current
//               </span>
//             </div>
//           </li>
//         </ul>
//       </div>
//       <div id="timeline-content" className="mt-12 text-center ">
//         <h1 className="text-2xl text-zinc-200 mb-8">Education</h1>

//         <ul className="relative border-l-4 border-blue-600 bg-[#1A1A1A]  text-gray-600 font-sans mx-auto px-8 py-8 max-w-lg">
//           <li className="relative border-b border-dashed border-gray-400 py-4 last:border-none">
//             <div className="absolute -left-[40.9px] top-3 bg-blue-600 rounded-full h-4 w-4"></div>
//             <div className=" flex flex-col items-start">
//               <h3 className="text-xl font-bold mb-2">
//                 Bs(Hons) Computer Science
//               </h3>
//               <p>Government College University, Faisalabad</p>
//               <span className="text-gray-400 text-sm font-light w-full text-left ">
//                 2015-2019
//               </span>
//             </div>
//           </li>
//           <li className="relative border-b border-dashed border-gray-400 py-4 last:border-none">
//             <div className="absolute -left-[40.9px] top-3 bg-blue-600 rounded-full h-4 w-4"></div>
//             <div className=" flex flex-col items-start">
//               <h3 className="text-xl font-bold mb-2">MSc. Digial Marketing </h3>
//               <p>Oxford Brookes University, Oxford</p>
//               <span className="text-gray-400 text-sm font-light w-full text-left">
//                 2020-2021
//               </span>
//             </div>
//           </li>
//           <li className="relative border-b border-dashed border-gray-400 py-4 last:border-none">
//             <div className="absolute -left-[40.9px] top-3 bg-blue-600 rounded-full h-4 w-4"></div>
//             <div className=" flex flex-col items-start">
//               <h3 className="text-xl font-bold mb-2">
//                 MSc International Business
//                 <br /> with Data Analytics
//               </h3>
//               <p>Ulster University, Birmingham</p>
//               <span className="text-gray-400 text-sm font-light w-full text-left">
//                 2021-2022
//               </span>
//             </div>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }
