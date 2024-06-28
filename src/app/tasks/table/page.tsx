"use client";

import TaskTable from "@/components/Table";

export default function Tasks() {
  return (
    <div className="flex h-full flex-col">
      <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100">
        Tasks
      </h1>

      <div className="flex flex-1 overflow-hidden">
        <TaskTable />
      </div>
    </div>
  );
}
