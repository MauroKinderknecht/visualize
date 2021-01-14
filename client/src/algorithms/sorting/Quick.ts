import Sort from './utils/Sort';

class QuickSort extends Sort {
    sort(array: number[]): void {
        this.quickSort(array, 0, array.length - 1);
    }

    private quickSort(array: number[], lo: number, hi: number): void {
        // if there is only one element then is sorted
        if (lo == hi) this.sorted(lo);

        // return if there is nothing to sort
        if (lo >= hi) return;

        // select the pivot element, then put all smaller elements to the left and all the greater elements to the right
        const i = this.partition(array, lo, hi);

        // mark the pivot as sorted
        this.sorted(i);

        // sort recursively the elements left and right of the pivot
        this.quickSort(array, lo, i - 1);
        this.quickSort(array, i + 1, hi);
    }

    private partition(array: number[], lo: number, hi: number): number {
        // select the pivot element
        let i = lo - 1;
        let j = hi;

        // put the smaller elements to the left and the greater elements to the right
        while (true) {
            while (this.greater(array, hi, ++i) && i < hi);
            while (this.greater(array, --j, hi) && j > lo);
            if (i >= j) break;
            this.swap(array, i, j);
        }

        // swap the pivot and the right most element
        this.swap(array, i, hi);

        // return the pivot index
        return i;
    }
}

export default QuickSort;
