import Sort from './utils/Sort';

class CountingSort extends Sort {
    sort(array: number[], place?: number): void {
        const n = array.length;

        // find max value
        let max: number;
        if (place) max = 9;
        else {
            let index = 0;
            for (let i = 1; i < n; i++) if (this.greater(array, i, index)) index = i;
            max = array[index];
        }

        // initialize an array with all zeros of length max + 1
        const count = [];
        for (let i = 0; i <= max; i++) count.push(0);

        // store the count of each element in the count array
        for (let i = 0; i < n; i++) {
            if (place) count[Math.floor(array[i] / place) % 10]++;
            else count[array[i]]++;
        }

        // store the cumulative sum in the count array
        for (let i = 1; i <= max; i++) count[i] += count[i - 1];

        // restore the elements to array
        const aux = [...array];
        for (let i = n - 1; i >= 0; i--) {
            let index: number;
            if (place) index = Math.floor(aux[i] / place) % 10;
            else index = aux[i];

            this.copy(array, count[index] - 1, aux, i, true);
            if (!place) this.sorted(count[index] - 1);
            count[index]--;
        }
    }
}

export default CountingSort;
