import logo from './logo.svg';
import './App.css';
import AddFisat from './components/AddFisat';
import SearchFisat from './components/SearchFisat';
import DeleteFisat from './components/DeleteFisat';
import { ViewFisat } from './components/ViewFisat';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (

<BrowserRouter>
<Routes>
  <Route path='/' element={<AddFisat/>}/>
  <Route path='/search' element={<SearchFisat/>}/>
  <Route path='/delete' element={<DeleteFisat/>}/>
  <Route path='/view' element={<ViewFisat/>}/>
</Routes>
</BrowserRouter>
  );
}

export default App;
