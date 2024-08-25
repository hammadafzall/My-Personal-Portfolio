import Image from "next/image";

function Hero() {
  return (
    <section className=" w-full h-full flex flex-col gap-10 py-36">
      <div className=" w-full h-full flex flex-row justify-start items-start mt-20">
        <Image
          src="/self.jpeg"
          alt="developer"
          width={120}
          height={100}
          className=" rounded-full border-8  p-1 mx-auto border-[#303030]"
        />
      </div>
      <div className=" flex flex-col justify-center gap-2 items-center mt-2 text-zinc-400">
        <h1 className=" text-3xl">Hi, I am</h1>
        <h2 className=" text-blue-500 text-6xl text-center">Hammad Afzal</h2>
        <p className=" text-center">
          A Software Developer and Digital Marketer.
        </p>
        <p className="text-xl text-center">
          I build interactive <span className=" text-blue-500">Wesites</span>{" "}
          that run across platforms and devices.
        </p>
      </div>
    </section>
  );
}

export default Hero;
