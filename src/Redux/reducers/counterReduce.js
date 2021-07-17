import { ENCREMENTAR, DECREMENTAR } from '../actions/index'
const INITIAL_STATE = {
    numero: 0,
}


const counterReduce = (state = INITIAL_STATE, action) => {
    
    switch(action.type) {
        case ENCREMENTAR:
            return {...state, numero: state.numero + 1 };

        case DECREMENTAR:
            return {...state, numero: state.numero - 1 };  
        default:
            return state;     
    };  
}

export default counterReduce;
