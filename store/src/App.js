import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Store from './screens/store';
import Thing from './screens/thing';
import 'bootstrap/dist/css/bootstrap.min.css';
import Categories from './screens/categories';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Store/>} />
          <Route path='/thing/:id' element={<Thing/>} />
          <Route path='/categories/:id' element={<Categories/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
