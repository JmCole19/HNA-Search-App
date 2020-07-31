import { SEARCH } from '../actions/searchAction';

const initState = {
    contents: [
        { id: '1', title: 'TestData1', body: "This is a test for data set 1" },
        { id: '2', title: "RestData2", body: 'This is a test for data set 2' },
        { id: '3', title: 'BestData3', body: 'This is a test for data set 3' }
    ],
    value: '',
    results: []
}

const searchReducer = (state = initState, action) => {
    switch (action.type) {
        case SEARCH: {
            let { value } = action;
            const results = state.contents.filter((content) => content.title.toLowerCase().includes(state.value.toLowerCase()));
            return { ...state, value, results };
        }
        default:
            return state;
    }
}

export default searchReducer;