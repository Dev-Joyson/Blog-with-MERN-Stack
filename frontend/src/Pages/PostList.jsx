import React, { useEffect, useState } from 'react'
import Post from '../Components/Post'
import axios from 'axios'

const PostList = () => {

	const [posts, setPosts] = useState([])


	useEffect(() => {

		const fetchPosts = async () => {
			const response = await axios.get('http://localhost:8000/api/posts')
			console.log(response.data)
			setPosts(response.data)
		}

		fetchPosts();
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
										<li className="list-group-item"><a href="#" className="text-black">Category 1</a></li>
										<li className="list-group-item"><a href="#" className="text-black">Category 2</a></li>
										<li className="list-group-item"><a href="#" className="text-black">Category 3</a></li>
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