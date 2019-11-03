import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, auth, ...rest}) => (
	<Route
		{...rest}
		render={props => auth.userLoggedIn===true ? <Component {...props} /> : <Redirect to='/' />}
	/>
);

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);