import { environment } from '../../environments/environment';
export const assert: (condition: boolean, context: string) => asserts condition
= (condition, context) => {
  if(environment.production) {
    return;
  }
  if (!condition) {
    throw new Error(`Error: ${context}`);
  }
};
