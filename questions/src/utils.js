export function buildQueryString(params){
    const queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
    return queryString;
}

export const header = {'headers': {'content-type': 'application/json'}}