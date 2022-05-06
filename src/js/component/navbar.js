import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { FavoritesContext } from "./favorites";



export const Navbar = () => {
	const {favorites, setfavorites} = useContext(FavoritesContext);
	return (
		<nav className="navbar navbar-light bg-light">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 mx-3">Home</span>
			</Link>

			<div>

				<Link to ="/ships">
					<button type="button" className="btn btn-success mx-2">Ships</button>
				</Link>
				<Link to ="/planets">
					<button type="button" className="btn btn-danger mx-2">Planets</button>
				</Link>
				<Link to ="/character">
					<button type="button" className="btn btn-primary mx-2">People</button>
				</Link>
				<button type="button" className="btn btn-info dropdown">
  Favorites <span className="badge bg-warning " data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">5</span> <a className="dropdown-toggle" data-bs-toggle="dropdown"
                        href="#"
                        role="button"
                        aria-expanded="false"></a>
                        <ul className="dropdown-menu">{favorites.map((x,i)=><li key={i} >{x}</li>)}</ul>
</button>
			</div>

		</nav>
	);
};
