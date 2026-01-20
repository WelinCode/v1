import { SectionTitle } from './SectionTitle';
import { ExperienceCard } from '../cards';
import { experiences } from '../../data/portfolio';

export const Experience = () => (
  <section id="experience" className="mb-24 scroll-mt-20">
    <SectionTitle>Experience</SectionTitle>
    <div>
      {experiences.map((experience) => (
        <ExperienceCard key={experience.id} experience={experience} />
      ))}
    </div>
  </section>
);
