import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Route</h1>} />
      <Route path="/sign-up" element={<h1>Sign Up Page</h1>} />
      <Route path="/sign-in" element={<h1>Sign in Page</h1>} />
      <Route path="*" element={<h1>Everything other</h1>} />
    </Routes>
  );
}

export default App;
