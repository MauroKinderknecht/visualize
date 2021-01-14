import CountingSort from './Counting';
import Sort from './utils/Sort';
class HeapSort extends Sort {
    sort(array: number[]): void {
        const aux = array.slice();
        this.heapSort(aux);
    }

    private heapSort(array: number[]): void {}
}

export default HeapSort;
