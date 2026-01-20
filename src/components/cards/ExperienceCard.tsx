import { ArrowIcon } from '../icons';
import { Tag } from '../ui';
import type { Experience } from '../../data/portfolio';

interface ExperienceCardProps {
  experience: Experience;
}

export const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  const { date, title, company, description, technologies, link } = experience;

  const CardWrapper = link ? 'a' : 'div';
  const wrapperProps = link
    ? { href: link, target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <CardWrapper
      {...wrapperProps}
      className="group flex flex-col lg:flex-row gap-1 lg:gap-6 p-4 lg:p-6 rounded-lg transition-all duration-300 hover:bg-white/[0.03] hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] cursor-pointer mb-4"
    >
      <div className="min-w-[120px] text-xs font-semibold text-slate-500 uppercase pt-1 mb-2 lg:mb-0">
        {date}
      </div>
      <div className="flex-1">
        <h3 className="text-slate-200 font-semibold text-base mb-2 flex items-center gap-2 group-hover:text-teal-300 transition-colors">
          {title} · {company}
          <ArrowIcon />
        </h3>
        <p className="text-sm text-slate-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>
      </div>
    </CardWrapper>
  );
};
