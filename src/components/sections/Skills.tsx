import { SectionTitle } from './SectionTitle';
import { Tag } from '../ui';
import { skillCategories } from '../../data/portfolio';

export const Skills = () => (
  <section id="skills" className="mb-24 scroll-mt-20">
    <SectionTitle>Skills</SectionTitle>
    <div className="space-y-8">
      {skillCategories.map((category) => (
        <div key={category.id}>
          <h5 className="text-slate-300 font-medium mb-4 text-sm">{category.name}</h5>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill) => (
              <Tag key={skill}>{skill}</Tag>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);
