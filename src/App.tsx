import LoginPage from "./pages/Login"
import { Dashboard } from "./pages/Dashboard"
import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
      <LoginPage />

      <Routes>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App
