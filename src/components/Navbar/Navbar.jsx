import React from 'react'
import { Container, Form, FormControl, Navbar, NavDropdown, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { logout } from '../../redux/actions/auth'

const NavBar = () => {
	const dispatch = useDispatch()
	const { username } = useSelector(({ auth }) => auth)

	const handleLOgout = () => {
		dispatch(logout())
	}

	return (
		<>
			<Navbar expand='lg'>
				<Container>
					<Navbar.Brand href='#' variant='primary'>
						Announcement
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='navbarScroll' />
					<Form className='d-flex'>
						<FormControl type='search' placeholder='Search by title' className='me-2' aria-label='Search' />
						<Button variant='outline-success'>Search</Button>
					</Form>
					<Navbar.Collapse className='justify-content-end'>
						<NavDropdown title={username}>
							<NavDropdown.Item onClick={handleLOgout}>Logout</NavDropdown.Item>
						</NavDropdown>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	)
}

export default NavBar
