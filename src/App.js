import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Api from './Api'
import NavBar from './NavBar'
import SocialPosts from './SocialPosts'
import SocialPostEdit from "./SocialPostEdit";
// import AddPostForm from "./AddPostForm";
import SocialPostCreate from './SocialPostCreate'

const api = new Api()



function App(props) {
    // let subsetOfProps = props.userId

    return (
        <Router>
            <NavBar/>
            <div className="App">
                <Switch>
                    <Route
                        exact={true}
                        path="/"
                        // render={(props) => <SocialPostEdit {...props} api={api}/>}
                        render={() => (

                            <React.Fragment>
                            {/*// <React.Fragment key={props}>*/}
                                {/*<AddPostForm api={api}/>*/}
                                {/*<SocialPostCreate api={api}/>*/}
                                {/*<SocialPostEdit api={api}/>*/}
                                <SocialPostCreate api={api}/>
                                <SocialPosts api={api}/>
                            </React.Fragment>
                           )}
                    />
                    <Route
                        path="/:postId"
                        // render={(props) => <SocialPosts {...props} api={api}/>}
                        render={() => (
                            <React.Fragment>

                            {/*// <React.Fragment key={subsetOfProps}>*/}
                                {/*<AddPostForm api={api}/>*/}
                                {/*<SocialPostCreate api={api}/>*/}
                                <SocialPostEdit api={api}/>

                                {/*<SocialPosts api={api}/>*/}
                            </React.Fragment>
                        )}
                        />
                </Switch>
            </div>
        </Router>
    )
}


// function App() {
//   return (
//       <Router>
//         <Switch>
//           <Route
//               path='/'
//               exact={true}
//               render={(props) => <Home {...props} api={api} navbar={navbar}/>}
//           />
//           <Route
//               path='/:id'
//               exact={true}
//               render={(props) => <UserPage {...props} api={api} navbar={navbar}/>}
//           />
//         </Switch>
//       </Router>
//   )
// }











// class App extends Component {





  // // Start of one of many client-server communication specific sections.
  // state = {
  //   isLoading: true,
  //   posts: []
  // }
  //
  // async componentDidMount() {
  //   const response = await fetch('/api/posts')
  //   const body = await response.json()
  //   this.setState({posts: body.posts, isLoading: false})
  // }
  // // End of one of many client-server communication specific sections.

  //
  // render() {
  //   // Start of one of many navbar sections.
  //   const navbar = <NavBar/>
  //   // End of one of many navbar sections.
  //
  //
  //
  //   // Start of one of many client-server communication specific sections.
  //   const { posts, isLoading } = this.state
  //   if (isLoading) {
  //     return <p>Loading...</p>
  //   }
  //   // End of one of many client-server communication specific sections.


    // return (
    //     // Start of one of many navbar sections.
    //     <Router>
    //       <Switch>
    //         <Route
    //             path='/'
    //             exact={true}
    //             render={(props) => <Home {...props} api={api} navbar={navbar}/>}
    //         />
    //         <Route
    //                 path='/:id'
    //                 exact={true}
    //                 render={(props) => <UserPage {...props} api={api} navbar={navbar}/>}
    //         />
    //       </Switch>
    //     </Router>
    //     // End of one of many navbar sections.
//
//
//     )
//   }
// }


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
