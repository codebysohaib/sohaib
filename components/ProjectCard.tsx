import { ProjectItem } from '@/lib/data';

export default function ProjectCard({ project }: { project: ProjectItem }) {
  const content = (
    <>
      <div className={`project-visual ${project.visualClass}`}>
        <div className="project-mockup">
          <i className={project.icon}></i>
        </div>
      </div>
      <div className="project-body">
        <div className="project-meta">
          <span className="project-type">{project.type}</span>
        </div>
        <div className="project-name">{project.name}</div>
        <div className="project-desc">{project.desc}</div>
        <div className="project-footer">
          {project.tags.map((tag: string, idx: number) => (
            <span key={idx} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </>
  );

  if (project.url) {
    return (
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${project.name} - ${project.type}`}
        className="project-card"
      >
        {content}
      </a>
    );
  }

  return <div className="project-card">{content}</div>;
}
