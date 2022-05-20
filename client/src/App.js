import {Routes, Route, Navigate} from 'react-router-dom';
import './App.css';
import Authors from './components/main';
import Create from './components/create.author';
import Update from './components/update.author';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/authors' element={<Authors/>}/>
        <Route path='/authors/new' element={<Create/>}/>
        <Route path='/authors/:id/edit' element={<Update/>}/>
        <Route path='*' element={<Navigate to="/authors/" replace/>}/>
      </Routes>
    </div>
  );
}

export default App;
