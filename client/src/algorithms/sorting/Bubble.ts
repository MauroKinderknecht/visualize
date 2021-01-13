import Sort from './utils/Sort';

class BubbleSort extends Sort {
    sort(array: number[]): void {
        const aux = array.slice();
        this.bubbleSort(aux);
    }

    bubbleSort(array: number[]): void {
        const n = array.length;
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                if (this.greater(array, j, j + 1)) this.swap(array, j, j + 1);
            }
            this.sorted(n - i - 1);
        }
        this.sorted(0);
    }
}

export default BubbleSort;
