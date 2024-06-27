import { formatBytes } from "./format-bytes";

describe("Function: Format Bytes", () => {
  it("should return 0 B when input is 0", () => {
    const result = formatBytes(0);
    expect(result).toBe("0 B");
  });

  it("should throw an error when input is not a number", () => {
    const input = "1024";
    expect(() => formatBytes(input)).toThrowError(
      "Input must be a valid number"
    );
  });

  it("should return the correct value in bytes", () => {
    const bytes = 230.5;
    const result = formatBytes(bytes);
    expect(result).toBe("230.5 B");
  });

  it("should return the correct value in kilobytes", () => {
    const bytes = 230.5 * 1024;
    const result = formatBytes(bytes);
    expect(result).toBe("230.5 KB");
  });

  it("should return the correct value in megabytes", () => {
    const bytes = 230.5 * 1024 * 1024;
    const result = formatBytes(bytes);
    expect(result).toBe("230.5 MB");
  });

  it("should return the correct value in gigabytes", () => {
    const bytes = 230.5 * 1024 * 1024 * 1024;
    const result = formatBytes(bytes);
    expect(result).toBe("230.5 GB");
  });

  it("should return the correct value in terabytes", () => {
    const bytes = 230.5 * 1024 * 1024 * 1024 * 1024;
    const result = formatBytes(bytes);
    expect(result).toBe("230.5 TB");
  });

  it("should return the correct value in petabytes", () => {
    const bytes = 230.5 * 1024 * 1024 * 1024 * 1024 * 1024;
    const result = formatBytes(bytes);
    expect(result).toBe("230.5 PB");
  });
});