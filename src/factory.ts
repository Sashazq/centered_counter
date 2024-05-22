/**
 * Factory function that returns a function for generating a sequence of numbers
 *
 * @param {number} [start] - The starting number for the sequence. Default is 0.
 * @param {number} [step] - The step to increment each number in the sequence. Default is 1.
 * @returns {() => number} - A function that generates the next number in the sequence every time it is called.
 */
export function factory(start: number = 0, step: number = 1): () => number {
    let counter = start

    return function count(): number {
        counter += step
        return counter
    }
}
