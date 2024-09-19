import { Outlet } from "react-router-dom"
import Header from "./components/Header"

function App() {

  return (
    <>
     <h1>Home Page</h1>
    <Header/>
    <Outlet/>
    
    </>
  )
}

export default App
