import SectionHeader from "./SectionHeader";
import ProjectList from "./ProjectList";

export default function Projects() {
  return (
    <section className="md:mt-20 md:mb-20 py-20 w-full h-full">
      <SectionHeader
        title="Projects"
        subtitle="Things I've Built,"
        description="Here's a selection of my mix of client's projects and personal projects. For more projects, kindly check out my GitHub repositories."
      />
      <ProjectList />
    </section>
  );
}
