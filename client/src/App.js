import React from 'react';
import './App.css';
import { Row } from 'antd';
import { Switch, Route } from 'react-router-dom';
 
import Landing from './views/Landing.jsx';

function App() {
  const baseStyle={ minHeight:'100vh', padding:'5vh', background:'#fff' };
  return (
    <Row style={baseStyle}>
      <Switch>
        <Route exact path='/' component={Landing} />
      </Switch>
    </Row>
  );
}

export default App;
