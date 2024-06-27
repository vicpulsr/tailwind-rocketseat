import { render, screen } from "@testing-library/react";
import { ImagePreview } from "./ImagePreview";

import { useFileInput as useFileInputOriginal, FileInputContextType }  from "./Root";

jest.mock("./Root", () => ({
  useFileInput: jest.fn(),
}));

const useFileInput = useFileInputOriginal as jest.MockedFunction<() => FileInputContextType>;

describe("Component: ImagePreview", () => {
  beforeAll(() => {
    global.URL.createObjectURL = jest.fn(() => "mocked-url");
  });
  it("should show icon if there is not an image uploaded", () => {
    useFileInput.mockReturnValue({
      files: [],
      id: "1",
      onFilesSelected: jest.fn(),
    });

    render(<ImagePreview />);
    const iconId = "icon-image-preview";
    expect(screen.getByTestId(iconId)).toBeInTheDocument();
  });

  it("should show image if there is an image uploaded", () => {
    const file = new File(["200"], "chucknorris.png", {
      type: "image/png",
    });

    useFileInput.mockReturnValue({
      files: [file],
      id: "1",
      onFilesSelected: jest.fn(),
    });
    render(<ImagePreview />);
    const imageId = "img-image-preview";
    expect(screen.getByTestId(imageId)).toBeInTheDocument();
  });
});
