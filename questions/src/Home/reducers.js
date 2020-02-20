const initialState = {
    acampsQuestions: [],
    teams: [],
    session: {session_id: -1},
}

export function homeReducer(state=initialState, action){
    switch(action.type){
        case "SET_ACAMPS_QUESTIONS":
            return {...state, acampsQuestions: action.payload};
        case "SET_NEW_SESSION":
            return {...state, 
                    session: action.payload.session,
                    teams: action.payload.teams}
        default:
            return state;
    }
}