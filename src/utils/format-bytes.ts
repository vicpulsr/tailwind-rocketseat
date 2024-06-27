export function formatBytes(bytes: number) {
    const units = ["B", "KB", "MB", "GB", "TB", "PB"];

    if (typeof bytes !== 'number' || isNaN(bytes)) {
        throw new Error("Input must be a valid number");
    }

    if (bytes === 0) return `0 B`;
    
    let value = bytes;
    let unitIndex = 0;

    while (value >= 1024 && unitIndex < units.length - 1) {
        value /= 1024;
        unitIndex++;
    }

    return `${value?.toFixed(1)} ${units[unitIndex]}`;
}