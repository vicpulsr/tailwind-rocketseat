import { render, screen } from "@testing-library/react"
import { Button } from "./Button"

describe("Component: Button", () => {
    it("should renders the button with defaul style when the variant prop is not provided.", () => {
        render(<Button>Save</Button>)
        const className = "bg-violet-600 text-white"
        expect(screen.getByText("Save")).toHaveClass(className)
    })

    it("should renders the button with outline style when the variant prop is outline.", () => {
        render(<Button variant="outline">Save</Button>)
        const className = "text-zinc-700 border border-zinc-300"
        expect(screen.getByText("Save")).toHaveClass(className)
    })

    it("should renders the button with ghost style when the variant prop is ghost.", () => {
        render(<Button variant="ghost">Save</Button>)
        const className = "rounded-md px-2 shadow-none text-zinc-500"
        expect(screen.getByText("Save")).toHaveClass(className)
    })
})