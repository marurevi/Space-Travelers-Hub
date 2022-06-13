import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navigator from './components/Navigator';
import Rockets from './components/Rockets';
import MyProfile from './components/MyProfile';
import Missions from './components/Mission';

function App() {
  return (
    <div className="App">
      <Navigator />
      <Routes>
        <Route index element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/myProfile" element={<MyProfile />} />
      </Routes>

    </div>
  );
}

export default App;
