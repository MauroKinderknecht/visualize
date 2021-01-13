import Sort from './utils/Sort';

class SelectionSort extends Sort {
    sort(array: number[]): void {
        const aux = array.slice();
        this.selectionSort(aux);
    }

    selectionSort(array: number[]): void {
        const n = array.length;
        for (let i = 0; i < n - 1; i++) {
            let minor = i;
            for (let j = i + 1; j < n; j++) if (this.greater(array, minor, j)) minor = j;
            if (minor != i) this.swap(array, minor, i);
            this.sorted(i);
        }
        this.sorted(n - 1);
    }
}

export default SelectionSort;
