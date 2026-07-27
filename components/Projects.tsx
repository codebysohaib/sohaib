import { projectsData, ProjectItem } from '@/lib/data';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section id="projects">
      <div className="projects-header reveal">
        <div>
          <p className="section-eyebrow">Selected work</p>
          <h2 className="section-title">Things I&apos;ve built</h2>
        </div>
      </div>
      <div className="projects-grid">
        {projectsData.map((project: ProjectItem, index: number) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}
