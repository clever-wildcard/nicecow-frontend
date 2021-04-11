// // Start of one of many client-server communication specific sections.
// state = {
//     isLoading: true,
//     posts: []
// }
//
// async componentDidMount() {
//     const response = await fetch('/api/posts')
//     const body = await response.json()
//     this.setState({posts: body.posts, isLoading: false})
// }
// // End of one of many client-server communication specific sections.
// // Start of one of many client-server communication specific sections.
// const { posts, isLoading } = this.state
// if (isLoading) {
//     return <p>Loading...</p>
// }
// // End of one of many client-server communication specific sections.
//

function socialPosts(posts) {
    return (
        <div className="App">
            <header className="App-header">
                <div className="App-intro">
                    <h2>Posts</h2>
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

