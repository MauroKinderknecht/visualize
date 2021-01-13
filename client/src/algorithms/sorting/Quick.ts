import Sort from './utils/Sort';

class QuickSort extends Sort {
    sort(array: number[]): void {
        const aux = array.slice();
        this.quickSort(aux, 0, array.length - 1);
    }

    private quickSort(array: number[], lo: number, hi: number): void {
        if (lo == hi) this.sorted(lo);
        if (lo >= hi) return;
        const i = this.partition(array, lo, hi);
        this.sorted(i);
        this.quickSort(array, lo, i - 1);
        this.quickSort(array, i + 1, hi);
    }

    private partition(array: number[], lo: number, hi: number): number {
        let i = lo - 1;
        let j = hi;

        while (true) {
            while (this.greater(array, hi, ++i) && i < hi);
            while (this.greater(array, --j, hi) && j > lo);
            if (i >= j) break;
            this.swap(array, i, j);
        }
        this.swap(array, i, hi);
        return i;
    }
}

export default QuickSort;
