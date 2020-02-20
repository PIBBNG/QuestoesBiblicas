export function setAcampsQuestions(acamps){
    return {
        type: "SET_ACAMPS_QUESTIONS",
        payload: acamps
    };
}

export function setNewSession(session_date){
    return {
        type: "SET_NEW_SESSION",
        payload: session_date
    }
}