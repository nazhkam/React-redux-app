import React from 'react'
import './scss/app.scss';
import { Header } from './components'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { connect } from 'react-redux'
import { installPizzas } from './redux/actions/action2';



function App(props) {

  React.useEffect(() => {
    fetch('http://localhost:3000/db.json').then((obj) => obj.json()).then((json)=>props.dispatch(installPizzas(json.pizzas)));  }, []);

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path='/' element={<Home pizzas={props.items} />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}
const mapState = (state) => {
  console.log(state)
  return {items: state.Pizzas.pizzas}
}
export default connect(mapState)(App);
