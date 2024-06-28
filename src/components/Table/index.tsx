import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table";
import { columns as baseColumns } from "./components/Column";
import { useTasks } from "@/stores/use-tasks";
import { Trash } from "lucide-react";
import { useShallow } from "zustand/react/shallow";

const TaskTable: React.FC = () => {
  const { tasks, deleteTask } = useTasks(
    useShallow((state) => ({
      tasks: state.tasks,
      deleteTask: state.deleteTask,
    })),
  );

  const columns = React.useMemo(
    () =>
      baseColumns.map((column) => {
        if (column.id === "delete") {
          return {
            ...column,
            cell: ({ row }: any) => (
              <button
                data-testid={`delete-${row.original.id}`}
                className="flex h-full w-full items-center justify-center text-zinc-500"
                onClick={() => deleteTask(row.original.id)}
              >
                <Trash className="size-4" />
              </button>
            ),
          };
        }
        return column;
      }),
    [deleteTask],
  );

  const table = useReactTable({
    data: tasks,
    columns,

    getCoreRowModel: getCoreRowModel(),
    // getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="mt-5 h-full w-full overflow-auto">
      <table className="mt-5 w-full">
        <thead className="sticky top-0 [&_tr]:border-b">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr
              key={headerGroup.id}
              className="hover:bg-muted/50 data-[state=selected]:bg-muted border-b bg-zinc-100 transition-colors"
            >
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="text-muted-foreground h-9 px-3 py-[6px] text-left align-middle font-medium [&:has([role=checkbox])]:pr-0"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="h-[200px] overflow-y-auto">
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className="hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors"
            >
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="p-3 align-middle [&:has([role=checkbox])]:pr-0"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskTable;
