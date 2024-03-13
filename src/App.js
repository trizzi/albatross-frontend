import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTheme } from './context/ThemeContext';
import Loading from './components/loading/Loading';
import Navbar from './components/navbar/Navbar';
import Showcase from './components/showcase/Showcase';
import About from './components/about/About';
import Services from './components/services/Services';
import Equipments from './components/equipments/Equipments';

import './App.css';

function App() {
	const { theme } = useTheme();

	return (
		<div
			className='App overflow-x-hidden'
			style={{
				color: theme.textcolor.light,
				background: theme.backgroundcolor.primary,
			}}>
			<Router>
				<Navbar />
				<Routes>
					<Route
						exact
						path='/'
						element={
							<Suspense fallback={<Loading />}>
								<Showcase />
							</Suspense>
						}
					/>
					<Route
						exact
						path='/about'
						element={<About />}
					/>
					<Route
						exact
						path='/services'
						element={<Services />}
					/>
					<Route
						exact
						path='/equipments'
						element={<Equipments />}
					/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
