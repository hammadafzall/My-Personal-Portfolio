import SectionHeader from "./SectionHeader";
import ProjectList from "./ProjectList";

export default function Projects() {
  return (
    <section className="mt-20 mb-20 py-20 w-full h-full">
      <SectionHeader
        title="Projects"
        subtitle="Things I've Built,"
        description="Here's a selection of my mix of client's projects and personal projects. For more stuff, kindly check out my GitHub repositories."
      />
      <ProjectList />
    </section>
  );
}
