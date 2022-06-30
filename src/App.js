import React from 'react';
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from './pages';
import { Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Dashboard />} />
				<Route path='/login' element={<Login />} />
				<Route path='*' element={<Error />} />
				<Route />
			</Routes>
		</div>
	);
}

export default App;
