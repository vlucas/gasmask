/**
 * Generate a random whole integer of specified fixed length
 */
export function randomIntegerWithLength(length: number): number {
  return Math.floor(
    Math.pow(10, length - 1) + Math.random() * (Math.pow(10, length) - Math.pow(10, length - 1) - 1)
  );
}
