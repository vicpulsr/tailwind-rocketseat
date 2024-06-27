import { render, screen } from "@testing-library/react";
import FileItem from "./FileItem";
describe("Component: FileItem", () => {
  beforeEach(async () => {
    const formatBytes = jest.fn();
    await formatBytes();
  });

  it("renders correctly with progress error", async () => {
    render(<FileItem name="Nome do arquivo" state="error" size={200} />);

    const textError = "Upload failed, please try again.";
    const buttonErrorId = "btn-error-file-item";
    const containerId = "container-file-item";
    const classContainerWhenError = "bg-error-25";

    expect(screen.getByText(textError)).toBeInTheDocument();
    expect(screen.getByTestId(buttonErrorId)).toBeInTheDocument();
    expect(screen.getByTestId(containerId)).toHaveClass(
      classContainerWhenError,
    );
  });

  it("renders correctly with progress progress", async () => {
    render(<FileItem name="Nome do arquivo" state="progress" size={200} />);

    const textProgress = "80%";

    expect(screen.getByText(textProgress)).toBeInTheDocument();
  });

  it("renders correctly with progress complete", async () => {
    render(<FileItem name="Nome do arquivo" state="complete" size={200} />);

    const textComplete = "100%";
    const iconComplete = "icon-complete-file-item";
    const containerId = "container-file-item";
    const classContainerWhenComplete = "border-violet-500";

    expect(screen.getByText(textComplete)).toBeInTheDocument();
    expect(screen.getByTestId(iconComplete)).toBeInTheDocument();
    expect(screen.getByTestId(containerId)).toHaveClass(
      classContainerWhenComplete,
    );
  });

  it('renders correctly with progress state', () => {
    const { container } = render(<FileItem state="progress" name="Nome do arquivo" size={1024} />);
    expect(container).toMatchSnapshot();
  });
});
