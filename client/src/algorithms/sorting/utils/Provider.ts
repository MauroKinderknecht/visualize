import BubbleSort from '../Bubble';
import InsertionSort from '../Insertion';
import MergeSort from '../Merge';
import QuickSort from '../Quick';
import SelectionSort from '../Selection';
import ShellSort from '../Shell';
import Sort from './Sort';
import SortType from './SortType';

class Provider {
    static getAll(): SortType[] {
        return [
            SortType.Bubble,
            SortType.Insertion,
            SortType.Merge,
            SortType.Selection,
            SortType.Shell,
            SortType.Quick,
        ];
    }

    static get(sort: SortType): Sort {
        switch (sort) {
            case SortType.Bubble:
                return new BubbleSort();
            case SortType.Insertion:
                return new InsertionSort();
            case SortType.Merge:
                return new MergeSort();
            case SortType.Selection:
                return new SelectionSort();
            case SortType.Shell:
                return new ShellSort();
            case SortType.Quick:
                return new QuickSort();
        }
    }

    static toString(sort: SortType): string {
        return SortType[sort];
    }
}

export default Provider;
