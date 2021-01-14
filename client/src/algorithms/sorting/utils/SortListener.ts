class SortListener {
    private animations: (string | number)[][];

    // this class stores all sorting events in an array to later be animated
    constructor() {
        this.animations = [];
    }

    // push a comparison to the animations array
    comparison(i: number, j: number): void {
        this.animations.push(['comparison', i, j]);
    }

    // push a swap to the animation array
    swap(i: number, j: number): void {
        this.animations.push(['swap', i, j]);
    }

    // push a copy to the animation array
    copy(i: number, value: number): void {
        this.animations.push(['copy', i, value]);
    }

    // push a sorted element to the animation array
    sorted(i: number): void {
        this.animations.push(['sorted', i]);
    }

    // returns the animation array
    getAnimations(): (string | number)[][] {
        return this.animations;
    }
}

export default SortListener;
