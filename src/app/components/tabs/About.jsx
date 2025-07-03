// components/About.js
export default function About() {
  return (
    <div className="sm:px-6 p-4 w-full h-full ">
      <h3 className="text-2xl md:text-3xl ml-5 bg-gradient-to-r from-blue-500 via-red-500 to-blue-900 bg-clip-text text-transparent font-black w-96 ">
        A Little About Me,
      </h3>
      <div className="mt-4">
        <p className="text-gray-500 text-lg leading-10 ">
          As a Full-Stack Developer with
          <span className=" ml-1 mr-1 text-2xl bg-gradient-to-r from-blue-500 to-blue-900 bg-clip-text text-transparent font-black">
            3 +
          </span>
          years of experience, I specialize in crafting digital solutions that drive results. 
          My expertise lies in creating visually engaging, user-centric websites, 
          backed by a solid understanding of back-end technologies. Through both freelance projects and professional roles, 
          I’ve honed my ability to translate client needs into impactful online experiences. I’m passionate about building seamless, 
          high-performance websites that deliver tangible value.
        </p>
      </div>
    </div>
  );
}
