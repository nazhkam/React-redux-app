import {filters} from './filters'
import {pizzas} from './pizzas'
import { combineReducers } from 'redux';


const rootReduser = combineReducers({pizzas,filters });
export default rootReduser;