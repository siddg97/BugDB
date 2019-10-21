import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Route, Switch } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./store.js";
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken.js';
import { setCurrentUser, logoutUser } from './redux/actions/authActions.js';

import { Grid } from 'semantic-ui-react';
import Login from './components/auth/Login.jsx';
import Register from './components/auth/Register.jsx';
import Landing from './components/layout/Landing.jsx';
import PrivateRoute from './components/PrivateRoute.js';
import Home from './components/Home.jsx';
import NavBar from './components/layout/NavBar.jsx';

if (localStorage.jwtToken) {
	const token = localStorage.jwtToken;
	setAuthToken(token);
	const decoded = jwt_decode(token);
	store.dispatch(setCurrentUser(decoded));

	const currentTime = Date.now() /1000;
	if(decoded.exp < currentTime) {
		store.dispatch(logoutUser());
		window.location.href = './login';
	}
}

function App() {
  return (
		<Provider store={store}>
			<Grid stackable textAlign='center' style={{minHeight:'100vh',margin:0}} verticalAlign='top'>
				<Grid.Row color='black'>
					<Grid.Column width={16}>
						<NavBar />
						<Route exact path='/' component={Landing} />
						<Route path='/login' component={Login} />
						<Route path='/register' component={Register} />
						<Switch>
							<PrivateRoute exact path='/home' component={Home} />
						</Switch>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Provider>
  );
}

export default App;
