import { LogOut } from "lucide-react";
import { Button } from "../Button";

export const Profile = () => {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <img
        src="https://github.com/vicpulsr.png"
        className="size-10 rounded-full"
      />

      <div className="flex flex-1 flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          Victória Puls
        </span>
        <span className="truncate text-sm text-zinc-500 dark:text-zinc-400">
          victoria.pessato@gmail.com
        </span>
      </div>

      <Button variant="ghost" type="button">
        <LogOut className="size-5 text-zinc-500" />
      </Button>
    </div>
  );
};
