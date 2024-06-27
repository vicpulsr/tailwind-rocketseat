import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import Tasks from "./page"
import { tasks } from "../../mocks/tasks"
import { Task } from "@/stores/use-tasks"

describe("Page: Tasks", () => {
    it("should be able to show all tasks", async () => {
        render(<Tasks />)

        tasks.forEach((task) => {
            expect(screen.queryByText(task.task)).toBeInTheDocument()
        })
    })
    it("should be able to delete a task when delete button is clicked", async () => {
        const user = userEvent.setup()
        const taskToDelete: Task = tasks[0]
        render(<Tasks />)
        
        expect(screen.queryByText(taskToDelete.task)).toBeInTheDocument()

        const deleteButton = screen.getByTestId(`delete-${taskToDelete.id}`)
        await user.click(deleteButton)
        expect(screen.queryByText(taskToDelete.task)).not.toBeInTheDocument()
    })
})