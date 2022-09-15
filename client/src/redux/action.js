import axios from 'axios';

export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_BY_NAME = 'GET_BY_NAME';
export const GET_DETAILS = 'GET_DETAILS';
export const RESET = 'RESET';
export const RESET_COUNTRIES = 'RESET_COUNTRIES';
export const ORDER_BY_NAME = 'ORDER_BY_NAME';
export const FILTER_BY_CONTINENT = 'FILTER_BY_CONTINENT';
export const FILTER_ACTIVITY = 'FILTER_ACTIVITY';
export const GET_ACTIVITY = 'GET_ACTIVITY';
export const FILTER_BY_POPULATION = 'FILTER_BY_POPULATION';


export function getCountries() {
    return async function (dispatch) {
        const json = await axios.get('/countries');
        const data = json.data
        return dispatch({
            type: GET_COUNTRIES,
            payload: data
        })
    }
}

export function getCountryByName (name) {
    return async function (dispatch) {
        try {
            const json = await axios.get('/countries?name=' + name)
            return dispatch ({
                type: GET_BY_NAME,
                payload: json.data
            })
        } catch (error) {
            console.log(error)
        }
        
    }
}

export function getDetailId (id) {
    return async function (dispatch) {
     try {
         let json = await axios.get('/countries/' + id);
         return dispatch({
             type: GET_DETAILS,
             payload: json.data
         })
     } catch (error) {
         console.log(error)
     }
    }
}

export function resetState () {
    return {
        type: RESET
    }
}

export function resetCountries () {
    return {
        type: RESET_COUNTRIES
    }
}

export function postActivity(payload){
    return async function(dispatch){
        const json = await axios.post('/activities', payload)
        return json
    }
}

export function orderByName(payload){
   
    return{
        type: ORDER_BY_NAME,
        payload
    }
}

export function filterByContinents(payload){
  
    return {
        type: FILTER_BY_CONTINENT,
        payload
    }
}

export function filterActivity(payload){
    return {
        type: FILTER_ACTIVITY,
        payload
    }
}

export  function getActivities(){
    return async function(dispatch){
        let json = await axios.get('/activities')
        const data = json.data
    return dispatch({
        type: GET_ACTIVITY,
        payload: data
        })
    }
}

export function filterByPopulation(payload){
    return{
        type: FILTER_BY_POPULATION,
        payload
    }
}