import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import mapReducer from "./mapDuck";
import top3Reducer from "./top3Duck"

const rootReducer = combineReducers({
    mapInfo: mapReducer,
    top3Info: top3Reducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
}
