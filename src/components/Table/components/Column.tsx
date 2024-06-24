import { ColumnDef } from "@tanstack/react-table";
import { Task } from "..";
import { Trash } from "lucide-react";

export const columns: ColumnDef<Task>[] = [
  {
    id: "selection",
    header: ({ table }) => (
      <div>
        <input
          type="checkbox"
          {...{
            checked: table.getIsAllRowsSelected(),
            indeterminate: table.getIsSomeRowsSelected(),
            onChange: table.getToggleAllRowsSelectedHandler(),
          }}
        />
      </div>
    ),
    cell: ({ row }) => (
      <div>
        <input
          type="checkbox"
          {...{
            checked: row.getIsSelected(),
            disabled: !row.getCanSelect(),
            indeterminate: row.getIsSomeSelected(),
            onChange: row.getToggleSelectedHandler(),
          }}
        />
      </div>
    ),
  },
  {
    accessorKey: "task",
    header: "Tarefa",
  },
  {
    accessorKey: "description",
    header: "Descrição",
  },
  {
    id: "delete",
    header: () => (
      <span className="flex items-center justify-center">Deletar</span>
    ),
  },
];
