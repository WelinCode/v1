interface IconProps {
  className?: string;
}

export const ArrowIcon = ({ className = "w-3.5 h-3.5" }: IconProps) => (
  <svg
    viewBox="0 0 20 20"
    fill="currentColor"
    className={`transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${className}`}
  >
    <path
      fillRule="evenodd"
      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
      clipRule="evenodd"
    />
  </svg>
);
