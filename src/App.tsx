import { Route, Routes } from 'react-router-dom';
import './App.css';
import AuthPage from './pages/AuthPage';
import SignInForm from './components/SignInForm';
function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Route</h1>} />
      <Route path="/sign-up" element={<AuthPage/>} />
      <Route path="/sign-in" element={<SignInForm />} />
      <Route path="*" element={<h1>Everything other</h1>} />
    </Routes>
  );
}

export default App;
