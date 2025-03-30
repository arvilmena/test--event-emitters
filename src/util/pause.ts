export const pause = (seconds: number) =>
  new Promise((resolve) => setTimeout(resolve, seconds * 1000));
