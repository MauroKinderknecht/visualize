import SortListener from './SortListener';

export default abstract class Sort {
    protected listener?: SortListener;

    abstract sort(array: number[]): void;

    protected greater(array: number[], i: number, j: number): boolean {
        this.listener?.comparison(i, j);
        return array[i] > array[j];
    }

    protected equals(array: number[], i: number, j: number): boolean {
        this.listener?.comparison(i, j);
        return array[i] == array[j];
    }

    protected swap(array: number[], i: number, j: number): void {
        this.listener?.swap(i, j);
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    protected copy(to: number[], i: number, from: number[], j: number, main: boolean): void {
        if (main) {
            this.listener?.copy(i, from[j]);
            to[i] = from[j];
        } else to.push(from[j]);
    }

    protected sorted(index: number): void {
        this.listener?.sorted(index);
    }

    public setListener(listener: SortListener): void {
        this.listener = listener;
    }
}
