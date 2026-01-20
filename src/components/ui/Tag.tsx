interface TagProps {
  children: React.ReactNode;
}

export const Tag = ({ children }: TagProps) => (
  <span className="bg-teal-400/10 text-teal-300 px-3 py-1 rounded-full text-xs font-medium">
    {children}
  </span>
);
