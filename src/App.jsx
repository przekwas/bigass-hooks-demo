import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Albums from './pages/Albums';
import AlbumDetails from './pages/AlbumDetails';
import NotFound from './pages/NotFound';
import Chirper from './pages/Chirper';

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>

				<Route exact path="/albums">
					<Albums />
				</Route>

				<Route exact path="/albums/:albumid">
					<AlbumDetails />
				</Route>

				<Route exact path="/chirper">
					<Chirper />
				</Route>

				<Route path="*">
					<NotFound />
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

export default App;
