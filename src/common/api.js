/**
 * API_BASE_URL
 *
 * This API, like many others, implements its specification as relative path structure. As a result, it can be implemented
 *  under any "base url". This string holds the API base where the API is currently hosted.
 *
 * @type {string}
 */
const API_BASE_URL = 'https://qdljuxtz6h.execute-api.us-east-1.amazonaws.com/prod';


/**
 * fetchProjects()
 *
 * function
 *
 * returns the result of a fetch() call to /projects on the current API base
 */
export function fetchProjects() {
    return fetch(API_BASE_URL + '/projects');
}