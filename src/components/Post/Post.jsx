import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const Post = ({ _id, desc, title }) => {
	const { id } = useParams()
	console.log(id)
	return (
		<>
		</>
		// <Link to={`/posts/${_id}`}>
		// 	<Card style={{ width: '25rem', margin: 10 }}>
		// 		<Card.Body>
		// 			<Card.Title>{title}</Card.Title>
		// 			<Card.Subtitle className='mb-2 text-muted'>Card Subtitle</Card.Subtitle>
		// 			<Card.Text>{desc}</Card.Text>
		// 			<ButtonGroup size='sm' className=''>
		// 				<Button variant='primary'>About</Button>
		// 				<Button variant='danger'>Delete</Button>
		// 			</ButtonGroup>
		// 		</Card.Body>
		// 	</Card>
		// </Link>
	)
}

export default Post
