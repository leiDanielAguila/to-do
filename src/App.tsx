import LoginPage from "./pages/Login"
import { Dashboard } from "./pages/Dashboard"
import { Generate } from "./pages/Generate"
import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/generate" element={<Generate />} />
        
      </Routes>
    </>
  )
}

export default App
