import { combineReducers } from 'redux';
import counterReduce from './counterReduce';


const rootReduce = combineReducers({ counter: counterReduce })


export default rootReduce;