interface SocialLinkProps {
  href: string;
  label: string;
  children: React.ReactNode;
}

export const SocialLink = ({ href, label, children }: SocialLinkProps) => (
  <a
    href={href}
    aria-label={label}
    className="text-slate-400 hover:text-slate-200 transition-colors duration-300 hover:-translate-y-0.5 transform"
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);
