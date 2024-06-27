import { useDarkMNode } from "./use-dark-mode";

describe("Dark mode", () => {
  beforeEach(() => {
    useDarkMNode.setState({ isDarkMode: false });
  });
  it("should isDarkMode initialize as false", () => {
    const { isDarkMode } = useDarkMNode.getState();
    expect(isDarkMode).toBeFalsy();
  });

  it("should change state of isDarkMode when set to true", () => {
    const { setIsDarkMode } = useDarkMNode.getState();

    setIsDarkMode(true);

    const { isDarkMode } = useDarkMNode.getState();

    expect(isDarkMode).toBeTruthy();
  });
});
