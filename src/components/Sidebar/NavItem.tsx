import { ElementType } from "react";
import { ChevronDown } from "lucide-react";
import { twMerge } from "tailwind-merge";

export interface NavItemProps {
  icon: ElementType;
  title: string;
}

export const NavItem = ({ icon: Icon, title }: NavItemProps) => {
  return (
    <a
      href=""
      className={twMerge(
        "group flex items-center gap-3 rounded px-3 py-2",
        "hover:bg-violet-50 dark:hover:bg-zinc-800",
      )}
    >
      <Icon className="size-5 text-zinc-500" />
      <span
        className={twMerge(
          "font-medium text-zinc-700 group-hover:text-violet-500",
          "dark:text-zinc-100 dark:group-hover:text-violet-300",
        )}
      >
        {title}
      </span>
      <ChevronDown className="ml-auto size-5 text-zinc-400 group-hover:text-violet-400 dark:text-zinc-600" />
    </a>
  );
};
