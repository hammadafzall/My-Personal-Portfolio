import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section className="mt-20 mb-20 py-20">
      <div className="mb-10 flex flex-col justify-center items-start gap-3 ml-3">
        <h1 className="text-lg text-zinc-600 font-bold self-start">Contact</h1>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 self-start ml-5">
          Let&apos;s Get In Touch
        </h1>
      </div>
      <div className="font-[sans-serif] max-w-6xl mx-auto relative bg-[#1A1A1A] shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-3xl overflow-hidden mt-4">
        <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-blue-950"></div>
        <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-blue-950"></div>
        <div className="grid md:grid-cols-2 gap-8 py-8 px-6">
          <div className="text-center flex flex-col items-center justify-center text-zinc-500">
            <h1 className="text-3xl font-bold">Hiya,</h1>
            <p className="text-zinc-400">
              Have an exciting project where we can work together? Or just want
              to say hi, do send me a message and let&apos;s chat.
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
