import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { AddPostForm } from './features/posts/AddPostForm'
import { EditPostForm } from './features/posts/EditPostForm'
import { Navbar } from './app/Navbar'
import { NotificationsList } from './features/notifications/NotificationsList'
import { PostsList } from './features/posts/PostsList'
import { SinglePostPage } from './features/posts/SinglePostPage'
import { UsersList } from './features/users/UsersList'
import { UserPage } from './features/users/UserPage'



function App() {
  return (
      <Router>
        <Navbar />
        <div className="App">
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                  <React.Fragment>
                      <AddPostForm />
                      <PostsList />
                  </React.Fragment>
              )}
              />
              <Route exact path="/editPost/:postId" component={EditPostForm} />
              <Route exact path="/notifications" component={NotificationsList} />
              <Route exact path="/posts/:postId" component={SinglePostPage} />
              <Route exact path="/users" component={UsersList} />
              <Route exact path="/users/:userId" component={UserPage} />
              <Redirect to="/" />

          </Switch>
        </div>
      </Router>
  )
}

export default App

// import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <Counter />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <span>
//           <span>Learn </span>
//           <a
//             className="App-link"
//             href="https://reactjs.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             React
//           </a>
//           <span>, </span>
//           <a
//             className="App-link"
//             href="https://redux.js.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Redux
//           </a>
//           <span>, </span>
//           <a
//             className="App-link"
//             href="https://redux-toolkit.js.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Redux Toolkit
//           </a>
//           ,<span> and </span>
//           <a
//             className="App-link"
//             href="https://react-redux.js.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             React Redux
//           </a>
//         </span>
//       </header>
//     </div>
//   );
// }
//
// export default App;
