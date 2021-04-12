import React, { Component } from 'react'
import { Alert, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

const SocialPost = (props) => (
    <div>
        <div>
            <p>User id: {props.userId}</p>
            <p>{props.postTitle}</p>
            <p>{props.postContent}</p>
            <p>Post Id: {props.postId}</p>
        </div>
        <div>
            <Button color="secondary" tag={Link} to={`/` + props.postId}>This Edit button doesn't work yet</Button>
            <Button color="danger" onClick={() => props.remove(props.postId)}>Delete</Button>
        </div>
    </div>
)

class SocialPosts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            socialPosts: [],
            isLoading: true,
            errorMessage: null
        }
        this.remove = this.remove.bind(this)
    }

    async componentDidMount() {
        this.setState({isLoading: true})
        const response = await this.props.api.getAll()
        if (!response.ok) {
            this.setState({
                errorMessage: `Failed to load posts: ${response.status} ${response.statusText}`,
                isLoading: false
            })
        }
        else {
            const body = await response.json()
            const socialPosts = body.posts
            this.setState({
                socialPosts: socialPosts,
                isLoading: false,
                errorMessage: null
            })
        }
    }

    async remove(postId) {
        let response = await this.props.api.delete(postId)
        if (!response.ok) {
            this.setState({errorMessage: `${response.statusText}`})
        }
        else {
            let refreshedSocialPosts = [...this.state.socialPosts].filter(i => i.postId !== postId)
            this.setState({socialPosts: refreshedSocialPosts, errorMessage: null})
        }
    }

    render() {
        const {socialPosts, isLoading, errorMessage} = this.state

        if (isLoading) {
            return <p>Loading...</p>
        }

        return (
            <div>
                {this.props.navbar}
                <div>
                    <Button color="success" tag={Link} to="/new">Add New</Button>
                </div>
                {errorMessage ?
                <div className="d-flex flex-row justify-content-center">
                    <Alert color="warning" style={{flex:1, maxWidth:'80%'}}>
                        {errorMessage}
                    </Alert>
                </div> : null
             }
            <div>
                {socialPosts.map( socialPost =>
                <SocialPost {...socialPost} remove={this.remove.bind(this)} key={socialPost.postId}/>
                )}
                {!socialPosts || socialPosts.length === 0 ? <p>No Posts!</p> : null}
            </div>
        </div>
        )
    }



}

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
//
// export const SocialPosts = (posts) => {
//     return (
//         <div className="App">
//             <header className="App-header">
//                 <div className="App-intro">
//                     <h2>Posts</h2>
//                     {posts.map(post =>
//                         <div key={post.postId}>
//                             <p>{post.userId}</p>
//                             <p>{post.postTitle}</p>
//                             <p>{post.postContent}</p>
//                         </div>
//                     )}
//                 </div>
//             </header>
//         </div>
//     )
// }

export default SocialPosts

// function SocialPosts(posts) {
//     return (
//         <div className="App">
//             <header className="App-header">
//                 <div className="App-intro">
//                     <h2>Posts</h2>
//                     {posts.map(post =>
//                         <div key={post.postId}>
//                             <p>{post.userId}</p>
//                             <p>{post.postTitle}</p>
//                             <p>{post.postContent}</p>
//                         </div>
//                     )}
//                 </div>
//             </header>
//         </div>
//         )
// }

