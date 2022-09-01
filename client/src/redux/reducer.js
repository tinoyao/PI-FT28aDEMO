import { GET_COUNTRIES, GET_BY_NAME, GET_DETAILS, RESET, RESET_COUNTRIES, ORDER_BY_NAME, FILTER_BY_CONTINENT, FILTER_ACTIVITY, GET_ACTIVITY, FILTER_BY_POPULATION, } from './action';

const initialState = {
    countries: [],
    allCountries: [],
    detail: [],
    activities: [],
}

export default function rootReducer (state= initialState, action) {
    switch (action.type) {
        case GET_COUNTRIES :
            return {
                ...state,
                countries : action.payload,
                allCountries: action.payload,
            }
        case GET_BY_NAME :
            console.log(action.payload.err)
            return {
                ...state,
                countries: action.payload.err ? [{ Error: 'No country found' }] : action.payload
            }
        case GET_DETAILS :
            return {
                ...state,
                detail: action.payload,
            }
        case RESET :
            return {
                ...state,
                detail: []
            }
        case RESET_COUNTRIES :
            return {
                ...state,
                countries: []
            }
        case ORDER_BY_NAME:
            const sortCountries = action.payload === 'asc'
            ? state.allCountries.sort((a, b) => a.name.localeCompare(b.name))
            : state.allCountries.sort((a, b) => b.name.localeCompare(a.name))
            
            return {
                ...state,
                countries: sortCountries
                
            }
        case FILTER_BY_CONTINENT:
            const allCountries = state.allCountries
            const continentFilter = action.payload === 'All'
            ? allCountries
            : allCountries.filter(e => e.continents === action.payload)
            return {
                ...state,
                countries: continentFilter
            }
        case GET_ACTIVITY:
            return {
                ...state,
                activities: action.payload
            }
        case FILTER_BY_POPULATION:
        
            const filterPopulation = action.payload === 'ASC'
    
        ? state.countries.sort((a,b)=>{
        
            return Number(a.population) > Number(b.population)
                ? -1
            : Number(a.population) < Number(b.population)
            ? 1
            : 0;

        })
        : state.countries.sort((a,b)=>{
                return Number(a.population) > Number(b.population)
                ? 1
                : Number(a.population) < Number(b.population)
                ? -1
                : 0;
            })
            return{
                    ...state,
                    countries: filterPopulation
                }  
        case FILTER_ACTIVITY:
                
            const allCountriesAct = state.allCountries
            const activitiesFilter = action.payload === 'All'
            ? allCountriesAct
            : allCountriesAct.filter(c => c.activities && c.activities.map(e => e.name).includes(action.payload))
            
            return {
                ...state,
                countries: activitiesFilter
            }  
        default:
            return state;
    }
}