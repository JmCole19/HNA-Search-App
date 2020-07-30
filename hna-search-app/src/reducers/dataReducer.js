import { GET_DATA, SET_DATA, API_START, API_END } from '../actions/types';

function dataReducer(state = {
    items: [
        { id: '1', title: 'Squirtle Laid an Egg', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat' },
        { id: '2', title: 'Charmander Laid an Egg', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat' },
        { id: '3', title: 'a Helix Fossil was Found', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat' }
    ],
    isLoadingData: false,
    error: null
}, action) {
    console.log(action.payload)
    switch (action.type) {
        case SET_DATA: return { ...state, items: action.payload }
        case API_START:
            if (action.payload === GET_DATA) {
                return {
                    ...state,
                    isLoadingData: true
                };
            }
            break;
        case API_END:
            if (action.payload === GET_DATA) {
                return {
                    ...state,
                    isLoadingData: false
                };
            }
            break;
        default:
            return state;
    }
}

export default (dataReducer);