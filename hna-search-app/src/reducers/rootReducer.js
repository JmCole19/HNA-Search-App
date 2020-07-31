import searchReducer from './searchReducer'
import dataReducer from './dataReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    data: dataReducer,
    search: searchReducer
})


export default rootReducer;