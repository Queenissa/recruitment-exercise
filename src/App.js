import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
        <Routes>
          <Route path='/' component={Home} />
        </Routes>
  );
}

export default App;
