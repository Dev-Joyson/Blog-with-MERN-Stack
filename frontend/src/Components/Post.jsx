import React from "react";

const Post = () => {
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
                    <h5 class="card-title">Post Title 1</h5>
                    <p class="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <a href="#" class="btn btn-primary">
                        Read More
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Post;
