import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './styles.css';

import logo from './logo.png';

const Header = () => {
	const { t } = useTranslation();

	return (
		<>
			<Navbar className="nav-bar justify-content-md-space-between justify-content-sm-space-around navpar" variant="light" expand="lg" sticky="top">
				<Container>
					<Link as={Link} to={`/`} style={{ textDecoration: 'none', flexBasis: '32%' }}>
						<img src={logo} alt="" width="32" height="32" className="d-inline-block align-top" />
						<Navbar.Brand>SOS Map</Navbar.Brand>
					</Link>
					<Navbar.Toggle aria-controls="basic-navbar-nav" className="navHam" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto " style={{ display: 'flex', justifyContent: 'space-between' }}>
							<Nav.Link as={Link} to="/funding">
								{t('funding')}
							</Nav.Link>
							<Nav.Link as={Link} to="/about">
								{t('about')}
							</Nav.Link>
							<Nav.Link as={Link} to="/blog">
								{t('stories')}
							</Nav.Link>
							<Nav.Link as={Link} to="/map">
								{t('map')}
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default Header;
