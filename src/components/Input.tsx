import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type InputPrefixProps = ComponentProps<"div">;

export const Prefix = (props: InputPrefixProps) => {
  return <div {...props} />;
};

type InputControlProps = ComponentProps<"input">;

export const Control = (props: InputControlProps) => {
  return (
    <input
      className={twMerge(
        "flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none",
        "dark:text-zinc-100 dark:placeholder-zinc-400",
      )}
      {...props}
    />
  );
};

export type InputRootProps = ComponentProps<"div">;

export const Root = (props: InputRootProps) => {
  return (
    <div
      className={twMerge(
        "mx-1 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm",
        "focus-within:border-violet-300 focus-within:ring-4 focus-within:ring-violet-200",
        "dark:border-zinc-700 dark:bg-zinc-800 dark:focus-within:border-violet-500 dark:focus-within:ring-violet-500/10",
        props.className,
      )}
      {...props}
    />
  );
};
