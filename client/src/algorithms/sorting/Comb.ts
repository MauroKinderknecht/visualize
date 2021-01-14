import Sort from './utils/Sort';

class CombSort extends Sort {
    sort(array: number[]): void {
        const aux = array.slice();
        this.combSort(aux);
    }

    private combSort(array: number[]): void {}
}

export default CombSort;
