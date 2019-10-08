import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import NavBar from './components/layout/NavBar.jsx';
import Landing from './components/layout/Landing.jsx';
import Register from './components/auth/Register.jsx';
import Login from './components/auth/Login.jsx';

function App() {
	return (
		<Router>
			<div className="App">
				<NavBar />
				<Route exact path='/' component={Landing} />
				<Route exact path='/register' component={Register} />
				<Route exact path='/login' component={Login} />
			</div>
		</Router>
	);
}

export default App;
