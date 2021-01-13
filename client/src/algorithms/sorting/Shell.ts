import Sort from './utils/Sort';

class ShellSort extends Sort {
    hSort = new HSort();

    sort(array: number[]): void {
        if (this.listener) this.hSort.setListener(this.listener);
        const aux = array.slice();
        this.shellSort(aux);
    }

    shellSort(array: number[]): void {
        const n = array.length;
        let h = 1;
        while (h <= n / 9) h = 3 * h + 1;
        for (; h >= 1; h /= 3) this.hSort.sort(array, Math.floor(h));
        for (let i = 0; i < n; i++) {
            this.sorted(i);
        }
    }
}

class HSort extends Sort {
    sort(array: number[], _h = 1): void {
        const n = array.length;
        for (let i = _h; i < n; i++) {
            let j = i;
            while (j >= _h && this.greater(array, j - _h, j)) {
                this.swap(array, j - _h, j);
                j -= _h;
            }
        }
    }
}

export default ShellSort;
