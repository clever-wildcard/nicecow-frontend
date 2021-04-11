import React, { Component } from 'react'
import './App.css';

class App extends Component {
  state = {
    isLoading: true,
    posts: []
  }

  async componentDidMount() {
    const response = await fetch("/api/posts")
    const body = await response.json()
    this.setState({posts: body.posts, isLoading: false})
  }

  render() {
    const { posts, isLoading } = this.state
    if (isLoading) {
      return <p>Loading...</p>
    }

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
}

export default App



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
