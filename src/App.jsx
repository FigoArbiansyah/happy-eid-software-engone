import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Ucapan from './pages/Ucapan'
import Our from './pages/Our'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route path="/ucapan" element={<Ucapan/>}></Route>
        <Route path="/our-team" element={<Our/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
