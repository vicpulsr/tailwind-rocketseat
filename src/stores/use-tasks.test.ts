import { tasks as tasksMocked } from "../mocks/tasks";
import { useTasks } from "./use-tasks";

describe("Tasks", () => {
  beforeEach(() => {
    useTasks.setState({ tasks: tasksMocked });
  });

  it("should have tasks in zustand state", () => {
    const { tasks } = useTasks.getState();

    expect(tasks).toBe(tasksMocked);
  });

  it("should add new task in tasks", () => {
    const task = {
      id: 16,
      task: "Task 16",
      description: "Description 16",
    };

    const length = tasksMocked.length;

    const { createTask } = useTasks.getState();

    createTask(task);

    const { tasks } = useTasks.getState();
    expect(tasks.length).toBe(length + 1);
    expect(tasks).toContainEqual(task);
  });

  it("should throw an error and not create a task when id already exists in tasks", () => {
    const task = {
      id: 1,
      task: "Task 1",
      description: "Description 1",
    };

    const { createTask } = useTasks.getState();

    expect(() => createTask(task)).toThrowError(
      "Task with this ID already exists",
    );
  });

  it("should delete task in tasks", () => {
    const length = tasksMocked.length;
    const id = 1;
    const taskRemovedIndex = id - 1;
    
    const { deleteTask } = useTasks.getState();

    deleteTask(id);

    const { tasks } = useTasks.getState();

    expect(tasks.length).toBe(length - 1);
    expect(tasks).not.toContainEqual(tasksMocked[taskRemovedIndex]);
  });

  it("should throw an error when id task does not exists", () => {
    const { deleteTask } = useTasks.getState();
    const length = tasksMocked.length;
    const id = length + 10;
    expect(() => deleteTask(id)).toThrowError("Task not found");
  });
});
