import './navbar.css';
import 'bootstrap/js/src/collapse.js';

export default function Navbar() {
	return (
		<nav className="navbar navbar-expand-md navbar-dark bg-primary main-nav">
			<div className="container-fluid">
				<div className="nav-logo-text">
					<h4>Carros Top</h4>
				</div>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#dscatalog-navbar"
					aria-controls="dscatalog-navbar"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="dscatalog-navbar">
					<ul className="navbar-nav offset-md-2 main-menu">
						<li>
							<a href="#" className="active">
								Home
							</a>
						</li>
						<li>
							<a href="#">Catálogo</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
