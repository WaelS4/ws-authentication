import userReducer from "./reducer/userReducer";
import { createStore, compose, applyMiddleware } from "redux"
import thunk from "redux-thunk"


// const devtool = window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION()
const devtool=typeof window.__REDUX_DEVTOOLS_EXTENSION__ === "undefined"
? a => a
: window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(userReducer, compose(applyMiddleware(thunk),devtool))
export default store;