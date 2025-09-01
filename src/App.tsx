import LoginPage from "./pages/Login"
import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
      <LoginPage />

      <Routes>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/dashboard" />
      </Routes>
    </>
  )
}

export default App
