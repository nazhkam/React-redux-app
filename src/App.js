import React from 'react'
import './scss/app.scss';
import { Header } from './components'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { connect } from 'react-redux'



function App(props) {

  React.useEffect(() => {
    fetch('http://localhost:3000/db.json').then((obj) => obj.json()).then((json)=>setPizzas(json.pizzas));
  }, []);

  const [pizzas, setPizzas] = React.useState([])
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path='/' element={<Home pizzas={pizzas} />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}
const mapState = (state) => (
  {
    items: state.reducer2.badSon
  })
export default connect(mapState)(App);
