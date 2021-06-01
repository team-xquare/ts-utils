/**
 * Wait as long as @param.
 * @param ms Milli Second
 */
export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
