import { SectionTitle } from './SectionTitle';
import { aboutContent } from '../../data/portfolio';

export const About = () => (
  <section id="about" className="mb-24 scroll-mt-20">
    <SectionTitle>About</SectionTitle>
    <div className="space-y-4">
      {aboutContent.map((paragraph, index) => (
        <p
          key={index}
          className="text-slate-400 [&_strong]:text-slate-200 [&_strong]:font-semibold"
          dangerouslySetInnerHTML={{ __html: paragraph }}
        />
      ))}
    </div>
  </section>
);
