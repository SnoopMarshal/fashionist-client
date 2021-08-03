import { createStore, applyMiddleware , compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from "./reducers";


const saveToLocalStorage = (state) => {
    try {
        const serialisedState = JSON.stringify(state);
        localStorage.setItem("persistantState", serialisedState)
    } catch (error) {
        console.error(error);
    }
}

const loadFromLocalStorage = () => {
    try {
        const serialisedState = localStorage.getItem("persistantState");
        if (serialisedState === null) {
            return undefined;
        }
        return JSON.parse(serialisedState);
    } catch (e) {
        return undefined;
    }
}

const middleWare = [thunk];
// Note: this API requires redux@>=3.1.0
const store = createStore(rootReducer, loadFromLocalStorage(), 
compose( applyMiddleware(...middleWare), window.devToolsExtension ? window.devToolsExtension() : f => f));
store.subscribe(() => saveToLocalStorage(store.getState()))
export default store;