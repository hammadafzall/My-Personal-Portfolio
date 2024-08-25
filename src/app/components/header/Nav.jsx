import { FiGithub } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { RiLinkedinLine } from "react-icons/ri";

function Nav() {
  return (
    <header className=" bg-[#1A1A1A] py-3 px-6 sm:px-10 font-[sans-serif] min-h-[70px] tracking-wide w-full ">
      <div className="flex flex-wrap items-center justify-between gap-4 w-full">
        <a href="javascript:void(0)">
          <h1 className="text-blue-200">Hammad Afzal</h1>
        </a>
        <div className=" text-zinc-300 flex flex-row gap-2 ">
          <a
            href="https://www.github.com/hammad42662"
            className=""
            target="_blank"
          >
            <FiGithub className=" text-xl  hover:animate-bounce  hover:text-blue-500" />
          </a>
          <a href="https://www.x.com/hammadafzall" className="" target="_blank">
            <FaXTwitter className=" text-xl  hover:animate-bounce hover:text-blue-500" />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-hammad-afzal/"
            className=""
            target="_blank"
          >
            <RiLinkedinLine className=" text-xl  hover:animate-bounce hover:text-blue-500" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Nav;
