import { Route, Routes } from "react-router-dom"
import Landing from "./pages/Landing"
import Dashbord from "./pages/Dashbord"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" Component={Landing}/>
        <Route path="/dashboard" Component={Dashbord}/>
      </Routes>
    </div>
  )
}

export default App