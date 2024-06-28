import { ElementType, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export interface NavItemProps {
  icon: ElementType;
  title: string;
  href?: string;
}

export interface NavItemWithChildrenProps extends NavItemProps {
  children?: React.ReactNode;
}

export const NavItem = ({
  icon: Icon,
  title,
  href = "/",
  children,
}: NavItemWithChildrenProps) => {
  const [open, setOpen] = useState(false);
  const [parent] = useAutoAnimate();

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setOpen(!open);
  };

  return (
    <div className="w-full">
      <a
        ref={parent}
        href={children ? "#" : href}
        className={twMerge(
          "group flex items-center gap-3 rounded px-3 py-2",
          "hover:bg-violet-50 dark:hover:bg-zinc-800"
        )}
        onClick={children ? (e) => e.preventDefault() : undefined}
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
        {children && (
          <button className="ml-auto" onClick={handleToggle}>
            {open ? (
              <ChevronUp className="size-5 text-zinc-400 group-hover:text-violet-400 dark:text-zinc-600" />
            ) : (
              <ChevronDown className="size-5 text-zinc-400 group-hover:text-violet-400 dark:text-zinc-600" />
            )}
          </button>
        )}
      </a>
      {open && children && <div className="ml-6">{children}</div>}
    </div>
  );
};
