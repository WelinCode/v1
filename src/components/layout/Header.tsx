import { Navigation } from './Navigation';
import { SocialLink, ResumeButton } from '../ui';
import { GithubIcon, LinkedInIcon, TwitterIcon } from '../icons';
import {
  profileData,
  navigationItems,
  socialLinks,
  type SocialLink as SocialLinkType,
} from '../../data/portfolio';

interface HeaderProps {
  activeSection: string;
}

const iconMap = {
  github: GithubIcon,
  linkedin: LinkedInIcon,
  twitter: TwitterIcon,
};

const renderSocialIcon = (social: SocialLinkType) => {
  const Icon = iconMap[social.icon];
  return (
    <SocialLink key={social.id} href={social.href} label={social.label}>
      <Icon />
    </SocialLink>
  );
};

export const Header = ({ activeSection }: HeaderProps) => {
  return (
    <header className="lg:sticky lg:top-0 lg:h-screen w-full lg:w-2/5 py-16 lg:py-20 flex flex-col justify-between">
      <div>
        <h1 className="text-slate-50 text-5xl font-bold tracking-tight">{profileData.name}</h1>
        <h2 className="text-slate-200 text-xl font-medium mt-2">{profileData.role}</h2>
        <p className="text-slate-400 mt-4 max-w-xs">{profileData.description}</p>

        <Navigation items={navigationItems} activeSection={activeSection} />
      </div>

      <div className="flex items-center gap-6 mt-8 lg:mt-0 flex-wrap">
        {socialLinks.map(renderSocialIcon)}
        <ResumeButton href={profileData.resumeUrl} />
      </div>
    </header>
  );
};
