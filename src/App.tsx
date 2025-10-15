import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import { PrivateAuthContainer } from "./components/PrivateAuthContainer.tsx";
import { PublicAuthConatiner } from "./components/PublicAuthConatiner.tsx";
import AuthProvider from "./components/AuthProvider.tsx";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<PublicAuthConatiner />}>
          <Route path="/sign-up" element={<AuthPage />} />
          <Route path="/sign-in" element={<AuthPage />} />
        </Route>

        <Route element={<PrivateAuthContainer />}>
          <Route path="/" element={<h1>Chat page</h1>} />
        </Route>

        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
