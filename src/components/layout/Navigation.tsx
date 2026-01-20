import type { NavItem } from '../../data/portfolio';

interface NavigationProps {
  items: NavItem[];
  activeSection: string;
}

export const Navigation = ({ items, activeSection }: NavigationProps) => {
  return (
    <nav className="mt-16 hidden lg:block">
      <ul>
        {items.map(({ id, label }) => {
          const isActive = activeSection === id;

          return (
            <li key={id} className="mb-4">
              <a
                href={`#${id}`}
                className={`group flex items-center text-xs font-bold tracking-widest uppercase py-2 transition-colors duration-300 ${
                  isActive ? 'text-slate-200' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <span
                  className={`h-px mr-4 transition-all duration-300 ${
                    isActive
                      ? 'w-16 bg-slate-200'
                      : 'w-8 bg-slate-400 group-hover:w-16 group-hover:bg-slate-200'
                  }`}
                />
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
