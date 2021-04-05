// export { buyBook } from "./Actions/action";

import {combineReducers} from 'redux'
import {PostReducer} from './reducer'

export default combineReducers({
    posts: PostReducer
})
