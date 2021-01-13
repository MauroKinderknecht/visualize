import React from 'react';
import { Breadcrumb, Card, Col, Row } from 'antd';
import { Link } from 'react-router-dom';

interface DashboardProps {
    theme?: string;
}

interface DashboardState {
    style?: string;
}

class Dashboard extends React.Component<DashboardProps, DashboardState> {
    constructor(props: DashboardProps) {
        super(props);
    }

    render(): JSX.Element {
        return (
            <div>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                </Breadcrumb>

                <div style={{ margin: '16px' }}>
                    <Row gutter={[16, 16]}>
                        <Col xs={24} sm={12} lg={8} xl={6} style={{ display: 'flex' }}>
                            <Card
                                title="Sorting"
                                bordered={false}
                                extra={<Link to="/sorting">More</Link>}
                                style={{ flex: 1 }}
                            >
                                <p>Visualización de algoritmos de sorting</p>
                            </Card>
                        </Col>
                        <Col xs={24} sm={12} lg={8} xl={6} style={{ display: 'flex' }}>
                            <Card
                                title="Pathfinding"
                                bordered={false}
                                extra={<Link to="/pathfinding">More</Link>}
                                style={{ flex: 1 }}
                            >
                                <p>Visualización de algoritmos de pathfinding</p>
                            </Card>
                        </Col>
                        <Col xs={24} sm={12} lg={8} xl={6} style={{ display: 'flex' }}>
                            <Card
                                title="Data Structures"
                                bordered={false}
                                extra={<Link to="/data-structures">More</Link>}
                                style={{ flex: 1 }}
                            >
                                <p>Visualización de estructuras de datos</p>
                            </Card>
                        </Col>
                        <Col xs={24} sm={12} lg={8} xl={6} style={{ display: 'flex' }}>
                            <Card
                                title="Graph"
                                bordered={false}
                                extra={<Link to="/graph">More</Link>}
                                style={{ flex: 1 }}
                            >
                                <p>Visualización de grafos y algoritmos</p>
                            </Card>
                        </Col>
                        <Col xs={24} sm={12} lg={8} xl={6} style={{ display: 'flex' }}>
                            <Card
                                title="Automaton"
                                bordered={false}
                                extra={<Link to="/automaton">More</Link>}
                                style={{ flex: 1 }}
                            >
                                <p>Visualización y construcción de automatas</p>
                            </Card>
                        </Col>
                        <Col xs={24} sm={12} lg={8} xl={6} style={{ display: 'flex' }}>
                            <Card
                                title="Compression"
                                bordered={false}
                                extra={<Link to="/compression">More</Link>}
                                style={{ flex: 1 }}
                            >
                                <p>Visualización de algoritmos de compresión</p>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Dashboard;
