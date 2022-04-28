import { types } from "../types/types";

export const authReducer = ( state = {}, action) => {
    switch (action.type) {
        case types.login: 
            return {
                actorName: action.payload.name
            }
        
        default: 
            return state;
    }
}