import { SEARCH } from '../actions/searchAction';

const initState = {
    contents: [
        { id: '1', title: 'TestData1', body: "This is a test for data set 1" },
        { id: '2', title: "TestData2", body: 'This is a test for data set 2' },
        { id: '3', title: 'TestData3', body: 'This is a test for data set 3' }
    ],
    value: '',
    results: []
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case SEARCH: {
            const { value } = action;
            const results = state.contents.filter((val) => val.contains(value));
            return { ...state, value, results };
        }
        default:
            return state;
    }
}

export default rootReducer;