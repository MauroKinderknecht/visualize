import Sort from './utils/Sort';
import SortListener from './utils/SortListener';

class ShellSort extends Sort {
    h = new HSort();

    sort(array: number[]): void {
        const n = array.length;

        // find the most efficient h value to sort
        let h = 1;
        while (h <= n / 9) h = 3 * h + 1;

        // hsort for  a sequence of h values
        for (; h >= 1; h /= 3) this.h.sort(array, Math.floor(h));

        // mark each element as sorted
        for (let i = 0; i < n; i++) {
            this.sorted(i);
        }
    }

    setListener(listener: SortListener): void {
        super.setListener(listener);
        this.h.setListener(listener);
    }
}

class HSort extends Sort {
    sort(array: number[], _h = 1): void {
        const n = array.length;

        // outer loop walks through the array
        for (let i = _h; i < n; i++) {
            let j = i;

            // inner loop compares and swaps elements in jumps of h positions with the already sorted
            while (j >= _h && this.greater(array, j - _h, j)) {
                this.swap(array, j - _h, j);
                j -= _h;
            }
        }
    }
}

export default ShellSort;
