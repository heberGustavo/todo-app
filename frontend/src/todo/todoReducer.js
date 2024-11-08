import { DESCRIPTION_CHANGED, TODO_ADDED, TODO_CLEAR, TODO_SEARCHED } from "./todoActionTypes";

const INITIAL_STATE = { description: "", list: [] };

export default(state = INITIAL_STATE, action) => {
    switch(action.type) {
        case DESCRIPTION_CHANGED:
            return { ...state, description: action.payload }
        case TODO_SEARCHED: 
            return { ...state, list: action.payload }
        case TODO_CLEAR:
            return { ...state, description: "" }
        default:
            return state;
    }
}