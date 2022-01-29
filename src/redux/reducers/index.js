import {filters} from './filters'
import {pizzas} from './pizzas'
import {cartPizzas} from './cartPizzas'

import { combineReducers } from 'redux';


const rootReduser = combineReducers({pizzas,filters,cartPizzas });
export default rootReduser;