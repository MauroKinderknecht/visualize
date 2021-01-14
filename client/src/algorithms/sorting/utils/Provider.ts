import BubbleSort from '../Bubble';
import BucketSort from '../Bucket';
import CountingSort from '../Counting';
import InsertionSort from '../Insertion';
import MergeSort from '../Merge';
import QuickSort from '../Quick';
import RadixSort from '../Radix';
import SelectionSort from '../Selection';
import ShellSort from '../Shell';
import Sort from './Sort';
import SortType from './SortType';

class Provider {
    static getAll(): SortType[] {
        return [
            SortType.Bubble,
            SortType.Bucket,
            SortType.Counting,
            SortType.Insertion,
            SortType.Merge,
            SortType.Quick,
            SortType.Radix,
            SortType.Selection,
            SortType.Shell,
        ];
    }

    static get(sort: SortType): Sort {
        switch (sort) {
            case SortType.Bubble:
                return new BubbleSort();
            case SortType.Bucket:
                return new BucketSort();
            case SortType.Counting:
                return new CountingSort();
            case SortType.Insertion:
                return new InsertionSort();
            case SortType.Merge:
                return new MergeSort();
            case SortType.Quick:
                return new QuickSort();
            case SortType.Radix:
                return new RadixSort();
            case SortType.Selection:
                return new SelectionSort();
            case SortType.Shell:
                return new ShellSort();
        }
    }

    static toString(sort: SortType): string {
        return SortType[sort];
    }
}

export default Provider;
