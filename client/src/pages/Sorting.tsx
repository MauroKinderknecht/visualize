import React, { MutableRefObject } from 'react';
import { Breadcrumb, Button, Divider, InputNumber, Select, Slider } from 'antd';
import SortType from '../algorithms/sorting/utils/SortType';
import Provider from '../algorithms/sorting/utils/Provider';
import SortListener from '../algorithms/sorting/utils/SortListener';

const { Option } = Select;

interface SortingProps {
    theme?: string;
}

interface SortingState {
    array: number[];
    size: number;
    order: string;
    algorithm: SortType;
    speed: number;
    delay: number;
    isCurrentlySorting: boolean;
    isSorted: boolean;
}

class Sorting extends React.Component<SortingProps, SortingState> {
    ref: MutableRefObject<HTMLDivElement | null>;
    timeouts: NodeJS.Timeout[];

    constructor(props: SortingProps) {
        super(props);
        this.state = {
            array: [],
            size: 50,
            order: 'random',
            algorithm: SortType.Quick,
            speed: 2.3,
            delay: 20, //Math.pow(10, 3 - 1.176) + 5,
            isCurrentlySorting: false,
            isSorted: false,
        };
        this.ref = React.createRef();
        this.timeouts = [];
    }

    componentDidMount(): void {
        this.generateArray();
    }

    generateArray(): void {
        if (this.state.isCurrentlySorting) return;
        if (this.state.isSorted) this.reset();
        this.setState({ isSorted: false });
        const array = [];
        for (let i = 0; i < this.state.size; i++) {
            if (this.state.order === 'random') {
                array.push(Math.floor(Math.random() * this.state.size + 1));
            }
            if (this.state.order === 'increasing') {
                array.push(i + 1);
            }
            if (this.state.order === 'decreasing') {
                array.push(this.state.size - i + 1);
            }
        }
        this.setState({ array: array });
    }

    sort(): void {
        const sort = Provider.get(this.state.algorithm);
        const listener = new SortListener();
        sort.setListener(listener);
        sort.sort(this.state.array);
        const animations = listener.getAnimations();
        const array = this.ref.current?.children as HTMLCollectionOf<HTMLDivElement>;
        animations.forEach((animation, index) => {
            this.timeouts.push(
                setTimeout(() => {
                    if (animation[0] === 'comparison') {
                        this.animateAccess(array, animation[1] as number, 'yellow');
                        this.animateAccess(array, animation[2] as number, 'yellow');
                    } else if (animation[0] === 'swap') {
                        this.animateAccess(array, animation[1] as number, 'red');
                        this.animateAccess(array, animation[2] as number, 'red');

                        const prev = this.state.array;
                        const current = [...prev];
                        current[animation[1] as number] = prev[animation[2] as number];
                        current[animation[2] as number] = prev[animation[1] as number];
                        this.setState({ array: current });
                    } else if (animation[0] === 'copy') {
                        this.animateAccess(array, animation[1] as number, 'blue');

                        const prev = this.state.array;
                        const current = [...prev];
                        current[animation[1] as number] = animation[2] as number;
                        this.setState({ array: current });
                    } else {
                        this.animateSorted(array, animation[1] as number, 'turquoise');
                    }
                }, index * this.state.delay),
            );
        });
        this.timeouts.push(
            setTimeout(() => {
                this.setState({ isSorted: true, isCurrentlySorting: false });
            }, animations.length * this.state.delay),
        );
    }

    animateAccess(array: HTMLCollectionOf<HTMLDivElement>, index: number, color: string): void {
        const style = array[index].style;
        this.timeouts.push(
            setTimeout(() => {
                style.background = color;
            }, this.state.delay),
        );
        this.timeouts.push(
            setTimeout(() => {
                style.background = 'blueviolet';
            }, this.state.delay * 2),
        );
    }

    animateSorted(array: HTMLCollectionOf<HTMLDivElement>, index: number, color: string): void {
        const style = array[index].style;
        this.timeouts.push(
            setTimeout(() => {
                style.background = color;
            }, this.state.delay + 8),
        );
    }

    reset(): void {
        const array = this.ref.current?.children as HTMLCollectionOf<HTMLDivElement>;
        for (let i = 0; i < this.state.size; i++) {
            const style = array[i].style;
            style.background = 'blueviolet';
        }
    }

    handleAlgorithmChange = (sort: SortType): void => {
        this.setState({ algorithm: sort });
    };

    handleSizeChange = (value: number | string | undefined): void => {
        if (value && value >= 10 && value <= 200) this.setState({ size: value as number }, this.generateArray);
    };

    handleOrderChange = (order: string): void => {
        this.setState({ order: order }, this.generateArray);
    };

    handleSpeedChange = (speed: number): void => {
        this.setState({ speed: speed, delay: Math.pow(10, 3 - speed) + 5 });
    };

    startSorting = (): void => {
        if (this.state.isSorted) this.reset();
        this.setState({ isCurrentlySorting: true }, this.sort);
    };

    clear = (): void => {
        this.timeouts.forEach((timeout) => {
            clearTimeout(timeout);
        });
        this.setState({ isCurrentlySorting: false }, this.generateArray);
        this.reset();
    };

    render(): JSX.Element {
        return (
            <div>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Sorting</Breadcrumb.Item>
                    <Breadcrumb.Item>{Provider.toString(this.state.algorithm)}</Breadcrumb.Item>
                </Breadcrumb>

                <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', marginRight: '12px' }}>
                            <p style={{ margin: 0, marginLeft: '4px', fontSize: '12px' }}>Algorithm</p>
                            <Select
                                style={{ maxWidth: '140px' }}
                                defaultValue={this.state.algorithm}
                                onChange={this.handleAlgorithmChange}
                                disabled={this.state.isCurrentlySorting}
                            >
                                {Provider.getAll().map((sort: SortType) => {
                                    return (
                                        <Option value={sort} key={sort}>
                                            {Provider.toString(sort)}
                                        </Option>
                                    );
                                })}
                            </Select>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', marginRight: '12px' }}>
                            <p style={{ margin: 0, marginLeft: '4px', fontSize: '12px' }}>Order</p>
                            <Select
                                style={{ maxWidth: '140px' }}
                                defaultValue={this.state.order}
                                onChange={this.handleOrderChange}
                                disabled={this.state.isCurrentlySorting}
                            >
                                <Option value="random" key="random">
                                    Random
                                </Option>
                                <Option value="increasing" key="increasing">
                                    Increasing
                                </Option>
                                <Option value="decreasing" key="decreasing">
                                    Decreasing
                                </Option>
                            </Select>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', marginRight: '12px' }}>
                            <p style={{ margin: 0, marginLeft: '4px', fontSize: '12px' }}>Size</p>
                            <InputNumber
                                style={{ maxWidth: '80px' }}
                                min={10}
                                max={200}
                                defaultValue={this.state.size}
                                onChange={this.handleSizeChange}
                                disabled={this.state.isCurrentlySorting}
                            />
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', marginRight: '12px' }}>
                            <p style={{ margin: 0, marginLeft: '4px', fontSize: '12px' }}>Speed</p>
                            <Slider
                                tipFormatter={null}
                                min={0.4}
                                max={3}
                                step={0.001}
                                disabled={this.state.isCurrentlySorting}
                                defaultValue={this.state.speed}
                                style={{ width: '100px' }}
                                onChange={this.handleSpeedChange}
                            />
                        </div>

                        <Button
                            danger={this.state.isCurrentlySorting}
                            type={this.state.isSorted ? 'default' : 'primary'}
                            onClick={
                                this.state.isCurrentlySorting || this.state.isSorted ? this.clear : this.startSorting
                            }
                        >
                            {this.state.isSorted ? 'Reset' : this.state.isCurrentlySorting ? 'Cancel' : 'Start'}
                        </Button>
                    </div>
                </div>

                <Divider />

                <div style={{ margin: '16px', display: 'flex', flexDirection: 'column' }}>
                    <div
                        ref={this.ref}
                        style={{ alignItems: 'center', display: 'flex', marginTop: 'auto', height: '60%' }}
                    >
                        {this.state.array.map((height, index) => (
                            <div
                                style={{
                                    height: `${(60 * height) / this.state.size}vh`,
                                    width: `${100 / this.state.size}vw`,
                                    background: 'blueviolet',
                                    borderRadius: '0.5em',
                                    margin: '0.15%',
                                }}
                                key={index}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Sorting;
