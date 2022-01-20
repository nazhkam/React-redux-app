import {reducer1} from './reducer1'
import {Pizzas} from './pizzas'
import { combineReducers } from 'redux';


const rootReduser = combineReducers({ reducer1, Pizzas });
export default rootReduser;