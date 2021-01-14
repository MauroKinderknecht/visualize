import Sort from './utils/Sort';

class InsertionSort extends Sort {
    sort(array: number[]): void {
        const n = array.length;

        // outer loop walks through the array
        for (let i = 0; i < n; i++) {
            // inner loop compares each element with the already sorted
            for (let j = i; j > 0; j--) {
                // swap if greater
                if (this.greater(array, j - 1, j)) this.swap(array, j - 1, j);
                else break;
            }
        }

        // mark every element as sorted
        for (let k = n - 1; k >= 0; k--) {
            this.sorted(k);
        }
    }
}

export default InsertionSort;
