import './styles/styles.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Erreur_404 from './pages/Erreur_404';
import Quiz from './pages/Quiz';
import Listofstates from './pages/Listofstates';
import Pageworldmap from './pages/Pageworldmap';

function App() {
  return (
    <div>
        <BrowserRouter>
          <Header />
          <Routes>
              <Route path='/' exact element={<Home />}/>
              <Route path='about' exact element={<About />}/>
              <Route path='quiz' exact element={<Quiz />}/>
              <Route path='pageworldmap' exact element={<Pageworldmap />}/>
              <Route path='listofstates' exact element={<Listofstates />}/>
              <Route path='*' element={<Erreur_404 />}/>
          </Routes>
        </BrowserRouter> 
      <Footer /> 
    </div>
  )
}

export default App;
