"use client";

import React, { useState } from "react";
import { PlusCircle } from "lucide-react";

import * as Input from "@/components/Input";
import { Button } from "@/components/Button";
import { useTasks } from "@/stores/use-tasks";

const CreateTask = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState({
    name: "",
    description: "",
  });

  const createTask = useTasks((state) => state.createTask);

  const handleAddNewTask = () => {
    const id = Date.now();
    if (!name || !description) {
      setError({
        name: "Name is required",
        description: "Description is required",
      });
      return;
    }

    const newTask = {
      id,
      task: name,
      description,
    };

    try {
      createTask(newTask);
    } catch (error) {
      console.error(error);
    } finally {
      setError({
        name: "",
        description: "",
      });
      setName("");
      setDescription("");
    }
  };

  return (
    <div className="">
      <div className="flex flex-col items-start gap-4">
        <div className="flex flex-col">
          <div className="flex flex-col gap-3 pt-5">
            <label
              htmlFor="task-name"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Name
            </label>
            <Input.Root errorMessage={error.name}>
              <Input.Control
                id="task-name"
                type="text"
                placeholder="Add a new task"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Input.Root>
          </div>

          <div className="flex flex-col gap-3 pt-5">
            <label
              htmlFor="task-description"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Description
            </label>
            <Input.Root errorMessage={error.description}>
              <Input.Control
                value={description}
                id="task-description"
                type="text"
                placeholder="Add a new task"
                onChange={(e) => setDescription(e.target.value)}
              />
            </Input.Root>
          </div>
        </div>

        <Button
          onClick={handleAddNewTask}
          className="flex items-center gap-2"
        >
          Add task <PlusCircle className="h-5 w-5 text-white" />
        </Button>
      </div>
    </div>
  );
};

export default CreateTask;

