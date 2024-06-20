"use client";

import * as Select from "@radix-ui/react-select";
import { CheckIcon } from "lucide-react";

export type SelectItemProps = Select.SelectItemProps & {
  text: string;
};

export const SelectItem = ({ text, ...props }: SelectItemProps) => {
  return (
    <Select.Item
      className="flex items-center justify-between gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-violet-100 dark:data-[highlighted]:bg-zinc-700"
      {...props}
    >
      <Select.ItemText asChild>
        <span className="text-black dark:text-zinc-100"> {text}</span>
      </Select.ItemText>
      <Select.ItemIndicator>
        <CheckIcon className="size-4 text-violet-500 dark:text-violet-300" />
      </Select.ItemIndicator>
    </Select.Item>
  );
};
