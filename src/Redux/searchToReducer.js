const initialState = {
    searchWordTo: '',
};

export default function searchToReducer(state = initialState, action) {
    switch (action.type) {

        case "UPDATE_SEARCHED_WORD_TO":
            return { searchWordTo: action.payload };
        default:
            return state;
    }
}