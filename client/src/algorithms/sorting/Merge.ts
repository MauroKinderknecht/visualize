import Sort from './utils/Sort';

class MergeSort extends Sort {
    sort(array: number[]): void {
        const aux = array.slice();
        this.mergeSort(aux, 0, array.length - 1);
        for (let i = 0; i < array.length; i++) {
            this.sorted(i);
        }
    }

    mergeSort(array: number[], lo: number, hi: number): void {
        if (hi <= lo) return;
        const mid = Math.floor((lo + hi) / 2);
        this.mergeSort(array, lo, mid);
        this.mergeSort(array, mid + 1, hi);
        this.merge(array, lo, mid, hi);
    }

    merge(array: number[], lo: number, mid: number, hi: number): void {
        const aux = [] as number[];
        for (let i = lo; i <= mid; i++) this.copy(aux, i, array, i, false);
        for (let j = hi; j > mid; j--) this.copy(aux, mid + hi - j + 1, array, j, false);
        for (let k = lo, i = 0, j = aux.length - 1; k <= hi; k++) {
            if (this.greater(aux, i, j)) this.copy(array, k, aux, j--, true);
            else this.copy(array, k, aux, i++, true);
        }
    }
}

export default MergeSort;
