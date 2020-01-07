import React from 'react';
import { Route } from 'react-router-dom';
import Login from './containers/Login';
import TestComponent from './containers/TestComponent';


export const BASE_PATH = '/app';

const BaseRouter = () => (
	<div>
		<Route exact path={`${BASE_PATH}/login`} component={Login} />
		<Route exact path={`${BASE_PATH}/test`} component={TestComponent} />
	</div>
);

export default BaseRouter;
