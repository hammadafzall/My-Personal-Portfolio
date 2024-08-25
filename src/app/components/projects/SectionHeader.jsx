export default function SectionHeader({ title, subtitle, description }) {
  return (
    <div className="mb-10 flex flex-col justify-center items-start gap-3 ml-3">
      <h1 className="text-lg text-zinc-600 font-bold self-start">{title}</h1>
      <h1 className="text-5xl font-bold text-gray-800 self-start ml-5">
        {subtitle}
      </h1>
      <p className="text-lg font-normal text-zinc-400 ml-7">{description}</p>
    </div>
  );
}
