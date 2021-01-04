import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { authReducer } from './reducers/auth.reducer'
import {
   homeVideosReducer,
   relatedVideosReducer,
   selectedVideoReducer,
   searchedVideosReducer,
} from './reducers/videos.reducer'
import { channelDetailsReducer } from './reducers/channel.reducer'
import { commentsReducer } from './reducers/comments.reducer'
const rootReducer = combineReducers({
   auth: authReducer,
   homeVideos: homeVideosReducer,
   selectedVideo: selectedVideoReducer,
   channelDetails: channelDetailsReducer,
   comments: commentsReducer,
   relatedVideos: relatedVideosReducer,
   searchedVideos: searchedVideosReducer,
})

const store = createStore(
   rootReducer,
   {},
   composeWithDevTools(applyMiddleware(thunk))
)

export default store
