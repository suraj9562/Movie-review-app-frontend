import { createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { movieReducer, particularMovieReducer, reviewReducer } from './redux/reducers/ReviewReducer';
import { userReducer } from './redux/reducers/UserReducer';

const reducer = combineReducers({
    movies: movieReducer,
    movie: particularMovieReducer,
    reviews: reviewReducer,
    user: userReducer
})

const initialstate = {

}

const middleware = [thunk]

const store = createStore(reducer, initialstate, composeWithDevTools(applyMiddleware(...middleware)));

export default store;