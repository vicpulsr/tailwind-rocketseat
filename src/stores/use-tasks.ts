import { create } from "zustand";
import { tasks } from "../mocks/tasks";

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

export const useTasks = create<TasksProps>((set, get) => ({
  tasks: tasks,
  createTask: (task) => {
    const tasks = get().tasks;
    const idAlreadyExists = tasks.some((t) => t.id === task.id);

    if (idAlreadyExists) {
      throw new Error("Task with this ID already exists");
    }
    
    set((state) => ({
      tasks: [...state.tasks, task],
    }));
  },
  deleteTask: (id: number) => {
    const tasks = get().tasks;
    const idExists = tasks.find((task) => task.id === id) !== undefined;

    if (!idExists) {
      throw new Error("Task not found");
    }

    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    }));
  },
}));
