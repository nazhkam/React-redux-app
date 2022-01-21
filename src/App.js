import React from 'react'
import './scss/app.scss';
import { Header } from './components'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { useDispatch } from 'react-redux'
import { setPizzas } from './redux/actions/setPizzas';


function App() {
  const dispatch= useDispatch();

  React.useEffect(() => {
    fetch('http://localhost:3000/db.json').then((obj) => obj.json()).then((json)=>dispatch(setPizzas(json.pizzas)));  }, []);

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
