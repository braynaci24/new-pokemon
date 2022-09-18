import './App.css';
import CardComponent from './components/CardComponent';
import CardDetail from './components/CardDetail';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path='/' element={
            <CardComponent />
          }>
          </Route>

          <Route path="pokemon/:PokemonName" element={
            <CardDetail />
          }>
          </Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
