import React from 'react';
import './App.css';
import { Row, Layout } from 'antd';
import { Switch, Route } from 'react-router-dom';
 
import Landing from './views/Landing.jsx';

const { Content,Footer } = Layout;
function App() {
  const layoutStyle = {minHeight:'100vh'};
  const baseStyle={ padding:'4vh', background:'#212D40', height:'100%' };
  const footerStyle={background:'#11151C',color:'#fff'};
  return (
    <Layout style={layoutStyle}>
      <Content style={baseStyle}>
        <Row>
          <Switch>
            <Route exact path='/' component={Landing} />
          </Switch>
        </Row>
      </Content>
      <Footer style={footerStyle}>
        FOOTER GOES HERE
      </Footer>
    </Layout>
  );
}

export default App;
