import axios from '../axios';
import { header } from '../utils';


export function fetchAcampsQuestions(params){
    const endpoint = '/acamps-questions/';
    return axios.get(endpoint, header);
}

export function createSession(params){
    const endpoint = '/sessions/';
    return axios.post(endpoint, params, header);
}