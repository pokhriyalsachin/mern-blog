import { BrowserRouter , Route , Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Dashboard from './pages/Dashboard'
import SignIn from './pages/SignIn'
import About from './pages/About'
import SignUp from './pages/SignUp'
function App() {


  return (
    <BrowserRouter>
      <Routes>
         <Route path="/"element={<Home/>}/>
         <Route path="/about"element={<About/>}/>
         <Route path="/dashboard"element={<Dashboard/>}/>
         <Route path="/projects"element={<Projects/>}/>
         <Route path="/signin"element={<SignIn/>}/>
         <Route path="/signup"element={<SignUp/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
