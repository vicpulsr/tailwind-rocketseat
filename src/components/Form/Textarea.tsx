import React, { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export interface TextareaProps extends ComponentProps<"textarea"> {}

export const Textarea = (props: TextareaProps) => {
  return (
    <textarea
      id="bio"
      className={twMerge(
        "min-h-[120px] w-full resize-y rounded-lg border border-zinc-300 px-3 py-2 text-sm text-zinc-700 shadow-sm outline-none",
        "focus:border-violet-300 focus:ring-4 focus:ring-violet-200",
        "dark:border-zinc-700 dark:bg-zinc-800 dark:focus:border-violet-500 dark:focus:ring-violet-500/10 dark:text-zinc-100 dark:placeholder-zinc-400",
      )}
      {...props}
    />
  );
};
