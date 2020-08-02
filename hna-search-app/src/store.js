import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducer from './reducers/rootReducer';

//Creates the redux store which handles state managemenet

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store