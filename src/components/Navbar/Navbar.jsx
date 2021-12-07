import React from 'react'
import { Container, Form, FormControl, Nav, Navbar, NavDropdown, Button, ListGroup } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { logout } from '../../redux/actions/auth'

const NavBar = () => {
	const dispatch = useDispatch()
	const history = useHistory()
	const { username, isAuth } = useSelector(({ auth }) => auth)

	const handleLOgout = () => {
		dispatch(logout()).then(() => {
			history.push('/auth/login')
		})
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
