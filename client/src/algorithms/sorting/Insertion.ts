import Sort from './utils/Sort';

class InsertionSort extends Sort {
    sort(array: number[]): void {
        const aux = array.slice();
        this.insertionSort(aux);
    }

    insertionSort(array: number[]): void {
        const n = array.length;
        for (let i = 0; i < n; i++) {
            for (let j = i; j > 0; j--) {
                if (this.greater(array, j - 1, j)) this.swap(array, j - 1, j);
                else break;
            }
        }
        for (let k = n - 1; k >= 0; k--) {
            this.sorted(k);
        }
    }
}

export default InsertionSort;
