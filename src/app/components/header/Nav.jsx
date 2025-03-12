import { FiGithub } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { RiLinkedinLine } from "react-icons/ri";
import { Dancing_Script } from "next/font/google";
const dancingScript = Dancing_Script({ subsets: ["latin"] });
function Nav() {
  return (
    <header className=" bg-[#152354] py-3 px-6 sm:px-10 min-h-[70px] tracking-wide w-full shadow-lg ">
      <div className="flex items-center justify-between gap-4 w-full">
        <h1
          className={`${dancingScript.className} w-full text-2xl animate-pulse sm:text-4xl bg-gradient-to-r from-white via-blue-100 to-blue-500 bg-clip-text text-transparent font-black`}
        >
          H.A
        </h1>

        <div className=" text-zinc-300 flex flex-row gap-2 ">
          <a
            href="https://github.com/hammadafzall"
            className=""
            target="_blank"
          >
            <FiGithub className=" text-xl  hover:animate-bounce  hover:text-blue-500" />
          </a>
          <a href="https://www.x.com/hammadafzall" className="" target="_blank">
            <FaXTwitter className=" text-xl  hover:animate-bounce hover:text-blue-500" />
          </a>
          <a
            href="https://www.linkedin.com/in/hammadafzal05/"
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
