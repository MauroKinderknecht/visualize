import Sort from './utils/Sort';

class BubbleSort extends Sort {
    sort(array: number[]): void {
        const n = array.length;

        // stop if in an iteration any changes are made
        let stop = false;

        // outer loops walks through the array
        for (let i = 0; i < n - 1 && !stop; i++) {
            stop = true;
            //inner loop compares each element
            for (let j = 0; j < n - i - 1; j++) {
                // swap if greater
                if (this.greater(array, j, j + 1)) {
                    this.swap(array, j, j + 1);
                    stop = false;
                }
            }

            // mark the i most last element as sorted
            this.sorted(n - i - 1);
        }

        // mark as sorted all unmarked elements
        for (let i = 0; i < n; i++) this.sorted(i);
    }
}

export default BubbleSort;
