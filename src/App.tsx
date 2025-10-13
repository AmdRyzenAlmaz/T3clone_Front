import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import { AuthContainer } from "./components/AuthContainer";

function App() {
  return (
    <Routes>
      <Route path="/sign-in" element={<AuthPage />} />
      <Route path="/sign-up" element={<AuthPage />} />

      <Route element={<AuthContainer/>}>
        <Route path="/" element={<h1>Route</h1>} />
        <Route path="*" element={<h1>Everything other</h1>} />
      </Route>
    </Routes>
  );
}


export default App;
