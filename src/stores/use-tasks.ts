import { create } from "zustand";

export interface Task {
  id: number;
  task: string;
  description: string;
}

type TasksProps = {
  tasks: Task[];
  createTask: (task: Task) => void;
  deleteTask: (id: number) => void;
};

export const useTasks = create<TasksProps>((set) => ({
  tasks: [
    { id: 1, task: "Tarefa 1", description: "Descrição da tarefa 1" },
    { id: 2, task: "Tarefa 2", description: "Descrição da tarefa 2" },
    { id: 3, task: "Tarefa 3", description: "Descrição da tarefa 3" },
    { id: 4, task: "Tarefa 4", description: "Descrição da tarefa 1" },
    { id: 5, task: "Tarefa 6", description: "Descrição da tarefa 2" },
    { id: 6, task: "Tarefa 7", description: "Descrição da tarefa 3" },
    { id: 7, task: "Tarefa 8", description: "Descrição da tarefa 1" },
    { id: 8, task: "Tarefa 9", description: "Descrição da tarefa 2" },
    { id: 9, task: "Tarefa 10", description: "Descrição da tarefa 3" },
    { id: 10, task: "Tarefa 11", description: "Descrição da tarefa 3" },
    { id: 11, task: "Tarefa 12", description: "Descrição da tarefa 1" },
    { id: 12, task: "Tarefa 13", description: "Descrição da tarefa 2" },
    { id: 13, task: "Tarefa 14", description: "Descrição da tarefa 3" },
    { id: 14, task: "Tarefa 15", description: "Descrição da tarefa 3" },
  ],
  createTask: (task) => {
    set((state) => ({
      tasks: [...state.tasks, task],
    }));
  },
  deleteTask: (id) => {
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    }));
  },
}));
