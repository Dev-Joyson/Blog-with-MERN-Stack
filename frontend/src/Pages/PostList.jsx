import React, { useEffect, useState } from 'react'
import Post from '../Components/Post'
import axios from 'axios'
import { Link } from 'react-router-dom'

const PostList = () => {

	const [posts, setPosts] = useState([])
	const [category, setCategoris] = useState([])

	const fetchCategory = async() => {
		const response = await axios.get('http://localhost:8000/api/categories')
		setCategoris(response.data)
	}


	useEffect(() => {

		const fetchPosts = async () => {
			const response = await axios.get('http://localhost:8000/api/posts')
			console.log(response.data)
			setPosts(response.data)
		}

		fetchPosts();
		fetchCategory();
	}, [])

	return (
		<>
			<main>
				<div className="container mt-4">
					<div className="row">

						<div className="col-lg-8">
							<h1 className="mb-4">Latest Posts</h1>

							{
								posts.length > 0 ? posts.map((post) => <Post post={post} />) : <h4>No posts available</h4>
							}


						</div>

						<div className="col-lg-4">
							<div className="card mb-4">
								<div className="card-body">
									<h5 className="card-title">About Me</h5>
									<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
								</div>
							</div>

							<div className="card mb-4">
								<div className="card-body">
									<h5 className="card-title">Categories</h5>
									<ul className="list-group">
										{category.map((item) => <li className="list-group-item"><Link to={`/posts/category/${item._id}`} className="text-black">{item.name}</Link></li>)}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	)
}

export default PostList