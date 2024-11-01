import React, { useEffect, useState } from 'react'
import Post from '../Components/Post'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const CategoryPost = () => {

    const [posts, setPosts] = useState([])
    const [category, setCategory] = useState(null)
    const { id } = useParams()

    const fetchCategory = async () => {
        const response = await axios.get(`http://localhost:8000/api/categories/${id}`)
        setCategory(response.data)
    }


    useEffect(() => {

        const fetchPosts = async () => {
            const response = await axios.get(`http://localhost:8000/api/posts/category/${id}`)
            console.log(response.data)
            setPosts(response.data)
        }

        fetchPosts();
        fetchCategory();
    }, [])

    if (!category) {
        return <p>Loading...</p>
    }

    return (

        <main>
            <div class="container mt-4">
                <div class="row">
                    <div class="col-lg-8">
                        <h1 class="mb-4">{category.name}</h1>
                        {
                            posts.length > 0 ? posts.map((post) => <Post post={post} />) : <h4>No posts available</h4>
                        }
                    </div>
                </div>
            </div>
        </main>

    )
}

export default CategoryPost