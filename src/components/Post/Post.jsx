import React from 'react'
import { Card, Button, ButtonGroup } from 'react-bootstrap'

const Post = ({ author, desc, title, createdAt }) => {
	return (
		<Card style={{ width: '25rem', margin: 10 }}>
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Card.Subtitle className='mb-2 text-muted'>Card Subtitle</Card.Subtitle>
				<Card.Text>{desc}</Card.Text>
				<ButtonGroup size='sm' className=''>
					<Button variant='primary'>About</Button>
					<Button variant='danger'>Delete</Button>
				</ButtonGroup>
			</Card.Body>
		</Card>
	)
}

export default Post
