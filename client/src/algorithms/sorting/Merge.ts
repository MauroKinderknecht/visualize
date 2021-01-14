import Sort from './utils/Sort';

class MergeSort extends Sort {
    sort(array: number[]): void {
        this.mergeSort(array, 0, array.length - 1);

        // mark every element as sorted
        for (let i = 0; i < array.length; i++) {
            this.sorted(i);
        }
    }

    private mergeSort(array: number[], lo: number, hi: number): void {
        // return if there is nothing to sort
        if (hi <= lo) return;

        // find the mid-point of the array
        const mid = Math.floor((lo + hi) / 2);

        // sort recursively the two halves
        this.mergeSort(array, lo, mid);
        this.mergeSort(array, mid + 1, hi);

        // merge the sorted sub arrays
        this.merge(array, lo, mid, hi);
    }

    private merge(array: number[], lo: number, mid: number, hi: number): void {
        const aux = [] as number[];

        // copy the first half of the array to the aux array
        for (let i = lo; i <= mid; i++) this.copy(aux, i, array, i, false);

        // copy the other half of the array to the aux array in reverse
        for (let j = hi; j > mid; j--) this.copy(aux, mid + hi - j + 1, array, j, false);

        // pick the larger element among i and j and place it in the final position
        for (let k = lo, i = 0, j = aux.length - 1; k <= hi; k++) {
            if (this.greater(aux, i, j)) this.copy(array, k, aux, j--, true);
            else this.copy(array, k, aux, i++, true);
        }
    }
}

export default MergeSort;
