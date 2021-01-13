class SortListener {
    private animations: (string | number)[][];

    constructor() {
        this.animations = [];
    }

    comparison(i: number, j: number): void {
        this.animations.push(['comparison', i, j]);
    }

    swap(i: number, j: number): void {
        this.animations.push(['swap', i, j]);
    }

    copy(i: number, value: number): void {
        this.animations.push(['copy', i, value]);
    }

    sorted(i: number): void {
        this.animations.push(['sorted', i]);
    }

    getAnimations(): (string | number)[][] {
        return this.animations;
    }
}

export default SortListener;
