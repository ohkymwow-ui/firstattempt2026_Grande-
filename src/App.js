import { Routes, Route } from 'react-router-dom';
import AlumniLogin from './alumni';
import Dashboard from './Dashboard';
import Profile from './Profile';
import Events from './Events';
import Network from './Network';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AlumniLogin />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/events" element={<Events />} />
      <Route path="/network" element={<Network />} />
    </Routes>
  );
}

export default App;