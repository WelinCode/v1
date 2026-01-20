import { DownloadIcon } from '../icons';

interface ResumeButtonProps {
  href: string;
}

export const ResumeButton = ({ href }: ResumeButtonProps) => (
  <a
    href={href}
    download
    className="flex items-center gap-2 text-teal-300 border border-teal-300 px-4 py-2 rounded text-sm font-medium transition-all duration-300 hover:bg-teal-300/10 hover:-translate-y-0.5"
  >
    Resume
    <DownloadIcon />
  </a>
);
