interface SectionTitleProps {
  children: React.ReactNode;
}

export const SectionTitle = ({ children }: SectionTitleProps) => (
  <h4 className="text-slate-200 font-bold uppercase tracking-widest mb-8 sticky top-0 bg-slate-900/90 backdrop-blur-sm py-4 z-10 text-sm">
    {children}
  </h4>
);
