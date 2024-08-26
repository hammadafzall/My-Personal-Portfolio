"use client";
import FormInput from "./FormInput";
import FormTextArea from "./FormTextArea";
import FormStatus from "./FormStatus";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      setStatus("Failed to send message.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-tl-3xl rounded-bl-3xl mb-10 sm:mb-5 md:mb-0"
    >
      <h2 className="text-2xl text-blue-600 font-bold text-center mb-6">
        Please fill the form
      </h2>
      <div className="max-w-md mx-auto space-y-3 relative">
        <FormInput
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name*"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email*"
          required
        />
        <FormInput
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone No."
        />
        <FormTextArea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message*"
          rows="6"
          required
        />
        <button
          type="submit"
          className="text-white w-full relative bg-blue-800 hover:bg-blue-600 rounded-md text-sm px-6 py-3 !mt-6"
        >
          Send Message
        </button>
        <FormStatus status={status} />
      </div>
    </form>
  );
}
