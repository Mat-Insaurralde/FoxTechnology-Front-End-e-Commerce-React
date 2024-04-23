import { Route, Routes} from "react-router-dom"

import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Register-Login/Login';
import Register from './components/Register-Login/Register';


function App() {


  return (
    <>
      <Navbar />

      <Routes>

        <Route path="/*" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>}/>
      
      </Routes>

      <Footer />

    </>
  )
}

export default App
