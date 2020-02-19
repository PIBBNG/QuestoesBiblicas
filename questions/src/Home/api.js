import axios from '../axios';

const header = {'headers': {'content-type': 'application/json'}}

export function fetchAcampsQuestions(params){
    const endpoint = '/acamps-questions/';
    return axios.get(endpoint, header);
}