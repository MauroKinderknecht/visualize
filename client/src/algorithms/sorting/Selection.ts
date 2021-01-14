import Sort from './utils/Sort';

class SelectionSort extends Sort {
    sort(array: number[]): void {
        const n = array.length;

        // outer loop wlaks through the array
        for (let i = 0; i < n - 1; i++) {
            let minor = i;

            // inner loop compares each unsorted element and finds the minor
            for (let j = i + 1; j < n; j++) if (this.greater(array, minor, j)) minor = j;

            //swap the minor and the right most unsorted element if they're not the same
            if (minor != i) this.swap(array, minor, i);

            // mark the minor element as sorted
            this.sorted(i);
        }

        // as the last element remaining in the array doesn't need to be sorted, it's marked as sorted in the end
        this.sorted(n - 1);
    }
}

export default SelectionSort;
