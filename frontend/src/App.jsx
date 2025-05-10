import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Error from '../routes/Error'
import Home from '../routes/Home'
import Contato from '../routes/Contato'
import Sobre from '../routes/Sobre'

function App() {
  return (
  <Router>
    <Header/>
    <Routes>
      <Route path='*' element={<Error/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/contato' element={<Contato/>}/>
      <Route path='/sobre' element={<Sobre/>}/>
    </Routes>
    <Footer/>
  </Router>
  )
}

export default App