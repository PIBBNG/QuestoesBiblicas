export function setAcampsQuestions(acamps){
    return {
        type: "SET_ACAMPS_QUESTIONS",
        payload: acamps
    };
}

export function setNewSession(session_id){
    return {
        type: "SET_NEW_SESSION",
        payload: session_id
    }
}