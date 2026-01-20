import { SectionTitle } from './SectionTitle';
import { ProjectCard } from '../cards';
import { projects } from '../../data/portfolio';

export const Projects = () => (
  <section id="projects" className="mb-24 scroll-mt-20">
    <SectionTitle>Projects</SectionTitle>
    <div>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  </section>
);
