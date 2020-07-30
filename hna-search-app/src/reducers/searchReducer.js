import { SEARCH } from '../actions/searchAction';

const initState = {
    value: '',
    items: []
}

const searchReducer = (state = initState, action) => {
    switch (action.type) {
        case SEARCH: {
            let { value } = action;
            const items = state.items.filter((item) => item.title.toLowerCase().includes(state.value.toLowerCase()));
            return { ...state, value, items };
        }
        default: return state
    }
}

export default (searchReducer);