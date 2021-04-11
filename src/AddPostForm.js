
function socialPosts(posts) {
    return (
        <div className="App">
            <header className="App-header">
                <div className="App-intro">
                    <h2>Pretend I'm a form.</h2>
                    {posts.map(post =>
                        <div key={post.postId}>
                            <p>{post.userId}</p>
                            <p>{post.postTitle}</p>
                            <p>{post.postContent}</p>
                        </div>
                    )}
                </div>
            </header>
        </div>
    )
}
