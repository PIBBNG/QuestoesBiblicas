const initialState = {
    acampsQuestions: [],
    teams: [],
}

export function homeReducer(state=initialState, action){
    switch(action.type){
        case "SET_ACAMPS_QUESTIONS":
            return {...state, acampsQuestions: action.payload};
        default:
            return state;
    }
}