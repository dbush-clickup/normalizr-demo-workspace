export const assert: (condition: boolean, context: string) => void
= (condition, context) => {
  if (!condition) {
    throw new Error(`Error: ${context}`);
  }
};
