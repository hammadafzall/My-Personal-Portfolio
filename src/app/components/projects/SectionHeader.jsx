export default function SectionHeader({ title, subtitle, description }) {
  return (
    <div className="mb-10 flex flex-col justify-center items-start gap-3 ml-3 ">
      <h1 className="text-lg text-zinc-600 font-bold self-start">{title}</h1>
      <h1 className=" lg:h-16  text-3xl md:text-5xl self-start ml-5 animate-text bg-gradient-to-r from-blue-500 via-red-500 to-blue-500 bg-clip-text text-transparent  font-black">
        {subtitle}
      </h1>
      <p className="text-lg font-normal text-zinc-400 ml-7">{description}</p>
    </div>
  );
}
