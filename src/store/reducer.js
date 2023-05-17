import { combineReducers } from "redux-immutable"
import recommendReducer from "../views/discover/c-pages/recommend/store"
import playerReducer from "../views/app-player/store"
const reducer = combineReducers({
  recommend:recommendReducer,
  player: playerReducer
})
export default reducer