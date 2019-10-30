import React from 'react';
import './App.css';
import { Layout } from 'antd';
import { Switch, Route } from 'react-router-dom';


import Nav from './views/ui/Nav.jsx';
import Home from './views/Home.jsx';
import Folders from './views/Folders.jsx';
import User from './views/User.jsx';

const { Header, Footer, Content } = Layout;


function App() {
  const baseStyle={ minHeight:'100vh' };
  const headerStyle={ }
  return (
    <div>
      <Layout style={baseStyle}>
        <Header style={headerStyle}> <Nav/> </Header>
        <Content>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/dir' component={Folders} />
            <Route path='/user' component={User} />
          </Switch>
        </Content>
        <Footer> Footer </Footer>
      </Layout>
    </div>
  );
}

export default App;
