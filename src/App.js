import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Rockets />} />
        <Route path="/categories" element={<Mission />} />
        <Route path="/myProfile" element={<MyProfile />} />
      </Routes>
      
    </div>
  );
}

export default App;
