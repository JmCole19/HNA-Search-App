import { SEARCH } from '../actions/searchAction';

const initState = {
    contents: [
        { id: '1', title: 'Squirtle Laid an Egg', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat' },
        { id: '2', title: 'Charmander Laid an Egg', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat' },
        { id: '3', title: 'a Helix Fossil was Found', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat' }
    ],
    value: '',
    items: []
}

const searchReducer = (state = initState, action) => {
    switch (action.type) {
        case SEARCH: {
            let { value } = action;
            const items = state.contents.filter((content) => content.title.toLowerCase().includes(state.value.toLowerCase()));
            return { ...state, value, items };
        }
        default:
            return state;
    }
}

export default searchReducer;