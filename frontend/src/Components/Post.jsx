import React from "react";
import { Link } from 'react-router-dom'

const Post = ({post}) => {
    return (
        <div class="card mb-4">
            <div class="row">
                <div class="col-sm-12 col-md-3">
                    <img
                        class="img-fluid h-100 card-img-top"
                        src="https://via.placeholder.com/800x400"
                        alt="..."
                    />
                </div>
                <div class="card-body col-md-8">
                    <h5 class="card-title">{post.title}</h5>
                    <p class="card-text">
                        {post.content.substr(0, 70)}...
                    </p>
                    <Link to={`/posts/${post._id}`} class="btn btn-primary">
                        Read More
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Post;
