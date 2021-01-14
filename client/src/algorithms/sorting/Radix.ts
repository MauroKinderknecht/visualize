import CountingSort from './Counting';
import Sort from './utils/Sort';
import SortListener from './utils/SortListener';

class RadixSort extends Sort {
    counting = new CountingSort();

    sort(array: number[]): void {
        const n = array.length;

        // find max value
        let index = 0;
        for (let i = 1; i < n; i++) if (this.greater(array, i, index)) index = i;
        const max = array[index];

        // sort with counting sort for each decimal place.
        for (let place = 1; Math.floor(max / place) > 0; place *= 10) this.counting.sort(array, place);

        for (let i = 0; i < n; i++) {
            this.sorted(i);
        }
    }

    setListener(listener: SortListener): void {
        super.setListener(listener);
        this.counting.setListener(listener);
    }
}

export default RadixSort;
