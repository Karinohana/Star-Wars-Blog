import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Cards } from "./views/cards";
import { Ships } from "./component/ships";
import { Planets } from "./component/planets";
import { Character } from "./component/character";
import { FavoritesContext } from "./component/favorites";
import { SinglePlanet } from "./singleplanet";
import { SingleCharacter } from "./component/singlecharacter";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	const [favorites, setfavorites] = useState(["start"]);
	return (
		<div>
			<BrowserRouter basename={basename}>
				<FavoritesContext.Provider value = {{favorites, setfavorites}}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route exact path ="/cards">
							<Cards/>
						</Route>
						<Route exact path ="/ships">
							<Ships/>
						</Route>
						<Route exact path ="/planets">
							<Planets/>
						</Route>
						<Route exact path ="/planets/:id">
							<SinglePlanet/>
						</Route>
						<Route exact path ="/character">
							<Character/>
						</Route>
						<Route exact path ="/character/:id">
							<SingleCharacter/>
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					
				</ScrollToTop>
				</FavoritesContext.Provider>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
