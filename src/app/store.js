import { configureStore } from '@reduxjs/toolkit'

import postsReducer from '../features/posts/postsSlice'
import usersReducer from '../features/users/usersSlice'
import counterReducer from '../features/counter/counterSlice'

export default configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
    counters: counterReducer
  }
})


// import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
//
// export default configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });
