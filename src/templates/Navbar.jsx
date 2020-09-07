import React from 'react'
import {NavLink} from 'react-router-dom'
import '../static/css/nav.css'
// import '../static/js/nav.js'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js'
// import Navbar from 'react-bootstrap/Navbar'
// import NavDropdown from 'react-bootstrap/NavDropdown'
//import { LinkContainer } from 'react-router-bootstrap'

const Navbar = () =>{

	return (
			<div className="container">
				<nav className="navbar navbar-expand-lg navbar-light">
					<NavLink to="/" className="navbar-brand myBrand">Creativeness in everything</NavLink>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    					<span className="navbar-toggler-icon"></span>
  					</button>
					
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="ml-auto navbar-nav">
							<li className="nav-item">
								<NavLink exact to="/" activeClassName="activeLink" className="nav-link">Home</NavLink>
							</li>
							<li className="nav-item">
								<NavLink exact to="/tips" activeClassName="activeLink" className="nav-link">Be creative</NavLink>
							</li>
							<li className="nav-item">
								<NavLink exact to="/business" activeClassName="activeLink" className="nav-link">Start Businesses</NavLink>
							</li>
							<li className="nav-item">
								<NavLink exact to="/contact" activeClassName="activeLink" className="nav-link">Contact</NavLink>
							</li>
						</ul>
					</div>
				</nav>
			</div>
	)
}



export default Navbar