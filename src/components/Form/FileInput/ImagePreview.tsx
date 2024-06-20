"use client";

import { User } from "lucide-react";
import { useFileInput } from "./Root";
import { useMemo } from "react";

export const ImagePreview = () => {
  const { files } = useFileInput();

  const previewURL = useMemo(() => {
    if (files.length === 0) return;

    return URL.createObjectURL(files[0]);
  }, [files]);

  if (previewURL === undefined) {
    return (
      <div className="flex size-16 items-center justify-center rounded-full bg-violet-50 dark:bg-violet-500/10">
        <User className="size-8 text-violet-500 dark:text-violet-300" />
      </div>
    );
  } else {
    return (
      <img
        src={previewURL}
        alt="Preview"
        className="size-16 rounded-full object-cover"
      />
    );
  }
};
