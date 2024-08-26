import Link from "next/link";

export default function RA() {
  return (
    <section className=" text-white flex flex-col justify-start items-start mt-10 ml-10 mb-10">
      <Link href="/" className=" text-zinc-600 bg-blue-200 px-2 py-2">
        &#9664; Back to Home
      </Link>
      <h1 className=" mb-10 self-center text-2xl text-blue-400">
        Technical Overview: RA Plumbing and Heating
      </h1>
      <div className=" flex flex-col gap-3 w-10/12">
        <h1 className=" text-2xl font-semibold text-blue-400">Description</h1>
        <p className=" text-base">
          Developed a comprehensive web application for R A Plumbing and
          Heating, a Nottingham-based small plumbing business. The design
          features descriptive content paired with relevant images, creating a
          visually engaging and informative user experience. Key functionalities
          include:
        </p>
      </div>
      <ul className=" flex flex-col gap-10 list-disc lg:ml-10 mt-2 w-10/12">
        <li>
          <b className=" text-blue-200"> Interactive Design: </b> Hover effects,
          sliding testimonials, and a scroll-to-top button on each page to
          enhance navigation, especially for long pages.
        </li>
        <li>
          <b className=" text-blue-200">Contact Form: </b>Integrated with
          EmailJS for inquiries and a floating WhatsApp button allowing users to
          contact the business directly via WhatsApp.
        </li>
        <li>
          <b className=" text-blue-200">Google Maps API:</b> Includes location
          routing for seamless user access to the business location. Single Page
          Application (SPA): Utilizes React Router for faster page transitions
          and a smoother user experience.
        </li>
        <li>
          <b className=" text-blue-200">Single Page Application (SPA):</b>{" "}
          Utilizes React Router for faster page transitions and a smoother user
          experience.
        </li>
        <li>
          <b className=" text-blue-200">SEO-Optimized Content: </b>Detailed
          content and appropriate use of SEO techniques to improve site ranking
          and user engagement.
        </li>
        <li>
          <b className=" text-blue-200">Enhanced User Experience:</b> Stock
          photos related to plumbing, attractive fonts, and a phone mockup in
          the contact form to make the site visually appealing and
          user-friendly.
        </li>
        <li>
          <b className=" text-blue-200">Performance Metrics:</b> The app
          features clean code and optimized load times for better performance.
        </li>
      </ul>
      <b className=" text-xl mt-10 text-blue-400">Technologies Used:</b>
      <p className=" text-base lg:ml-10 mt-3">
        React, TypeScript, Tailwind CSS, Vite, EmailJS, Swiper JS, React Router,
        Google Maps API, React Helmet, React Floating WhatsApp, Scroll to Top,
        Sticky Box
      </p>
      <b className=" mt-10 text-3xl">
        <b className=" text-blue-400"> Note:</b> Due to security concerns, the
        source code for this project is not publicly available. However, you can
        explore the live demo to see the full functionality in action
      </b>
    </section>
  );
}
