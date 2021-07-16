import { createStore, applyMiddleware , compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from "./reducers";

const initialState = {};
const middleWare = [thunk];
// Note: this API requires redux@>=3.1.0
const store = createStore(rootReducer, initialState, 
compose( applyMiddleware(...middleWare), window.devToolsExtension ? window.devToolsExtension() : f => f));

export default store;