import InsertionSort from './Insertion';
import Sort from './utils/Sort';
import SortListener from './utils/SortListener';

class BucketSort extends Sort {
    insertion = new InsertionSort();

    sort(array: number[]): void {
        const n = array.length;

        // initialize empty buckets array
        const buckets: number[][] = [];

        // create n emptu buckets
        for (let i = 0; i < n; i++) {
            buckets.push([]);
        }

        // find max value
        let index = 0;
        for (let i = 1; i < n; i++) if (this.greater(array, i, index)) index = i;
        const max = array[index];

        // populate buckets
        for (let i = 0; i < n; i++) {
            const index = Math.floor((10 * array[i]) / max);
            this.copy(buckets[index], 0, array, i, false);
        }

        // insert back on the original array
        let i = 0;
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < buckets[j].length; k++) {
                this.copy(array, i++, buckets[j], k, true);
            }
        }

        // sort with insertion
        this.insertion.sort(array);
    }

    setListener(listener: SortListener): void {
        super.setListener(listener);
        this.insertion.setListener(listener);
    }
}

export default BucketSort;
