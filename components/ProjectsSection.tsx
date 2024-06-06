import ProjectListItem from "./ProjectListItem";

export default function ProjectsSection() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <ul className="project-list">
        <h3>Web Development</h3>
        <ProjectListItem />
      </ul>
    </section>
  );
}
