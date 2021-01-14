import SortListener from './SortListener';

export default abstract class Sort {
    protected listener?: SortListener;

    // method to sort an array
    abstract sort(array: number[]): void;

    // returns true if the element of index i is greater than the element at index j
    protected greater(array: number[], i: number, j: number): boolean {
        this.listener?.comparison(i, j);
        return array[i] > array[j];
    }

    // returns true is elements at index i and j are equal
    protected equals(array: number[], i: number, j: number): boolean {
        this.listener?.comparison(i, j);
        return array[i] == array[j];
    }

    // interchanges positions of elements at indices i and j
    protected swap(array: number[], i: number, j: number): void {
        this.listener?.swap(i, j);
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    // copies a value from an auxiliary array
    protected copy(to: number[], i: number, from: number[], j: number, main: boolean): void {
        if (main) {
            this.listener?.copy(i, from[j]);
            to[i] = from[j];
        } else to.push(from[j]);
    }

    // set an element of the array as sorted
    protected sorted(index: number): void {
        this.listener?.sorted(index);
    }

    // set a listener
    public setListener(listener: SortListener): void {
        this.listener = listener;
    }
}
