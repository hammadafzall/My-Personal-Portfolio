import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section className="md:mt-10 md:mb-20">
      <div className="mb-20 flex flex-col justify-center items-start gap-3 ml-3">
        <h1 className="text-lg text-zinc-600 font-bold self-start">Contact</h1>
        <h1 className="text-3xl md:text-5xl self-start ml-5 bg-gradient-to-r from-blue-500 via-red-500 to-blue-500 bg-clip-text text-transparent font-black">
          Let&apos;s Get In Touch
        </h1>
      </div>
      <div className=" max-w-6xl mx-auto relative bg-[#1A1A1A] shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-3xl overflow-hidden mt-4">
        <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-blue-950"></div>
        <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-blue-950"></div>
        <div className="grid md:grid-cols-2 gap-8 py-8 px-6">
          <div className="text-center flex flex-col items-center justify-center text-zinc-500">
            <h1 className="text-3xl bg-gradient-to-r from-blue-500 via-red-500 to-blue-900 bg-clip-text text-transparent font-black">
              Hi, Hola, Salam, Bonjour...
            </h1>
            <p className="text-zinc-400">
              Working on an exciting project where we could collaborate? Or just
              want to connect? Feel free to send me a message — I'd love to
              chat!
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
