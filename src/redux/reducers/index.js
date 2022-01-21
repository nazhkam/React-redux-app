import {filters} from './filters'
import {setPizzas} from './setPizzas'
import { combineReducers } from 'redux';


const rootReduser = combineReducers({setPizzas,filters });
export default rootReduser;