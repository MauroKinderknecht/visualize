import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography } from 'antd';
import Dashboard from './pages/Dashboard';
import Sorting from './pages/Sorting';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

interface AppProps {
    soil?: string;
}

interface AppState {
    theme: string;
}

class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
            theme: 'dark',
        };
    }

    handleThemeToggle = (): void => {
        if (this.state.theme === 'dark') this.setState({ theme: 'light' });
        else this.setState({ theme: 'dark' });
    };

    render(): JSX.Element {
        return (
            <Router>
                <Layout>
                    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                        <Link to="/">
                            <Title level={3} style={{ color: '#fff', margin: '14px 0' }}>
                                Visualize
                            </Title>
                        </Link>
                    </Header>
                    <Content
                        style={{
                            padding: '0 50px',
                            marginTop: 64,
                            minHeight: 'calc(100vh - 134px)',
                        }}
                    >
                        <Switch>
                            <Route exact path="/">
                                {' '}
                                <Dashboard />{' '}
                            </Route>
                            <Route path="/sorting">
                                {' '}
                                <Sorting />{' '}
                            </Route>
                            <Route path="/pathfinding"> /TODO </Route>
                            <Route path="/data-structures"> /TODO </Route>
                            <Route path="/graph"> /TODO </Route>
                            <Route path="/automaton"> /TODO </Route>
                            <Route path="/compression"> /TODO </Route>
                        </Switch>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Created by Mauro Kinderknecht in 2021</Footer>
                </Layout>
            </Router>
        );
    }
}

export default App;
