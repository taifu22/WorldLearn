import './styles/styles.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Erreur_404 from './pages/Erreur_404';
import Jeux from './pages/Jeux';
import Quiz from './pages/Quiz';
import MemoryGame from './pages/MemoryGame';
import Listofstates from './pages/Listofstates';
import Pageworldmap from './pages/Pageworldmap';
import QuizCapitales from './pages/QuizCapitales';
import QuizDrapeaux from './pages/QuizDrapeaux';
import QuizResult from './pages/QuizResult';

function App() {
  return (
    <div>
        <BrowserRouter>
          <Header />
          <Routes>
              <Route path='/' exact element={<Home />}/>
              <Route path='about' exact element={<About />}/>
              <Route path='jeux' exact element={<Jeux />}/>
              <Route path='quiz' exact element={<Quiz />}/>
              <Route path='memorygame' exact element={<MemoryGame />}/>
              <Route path='quizcapitales' exact element={<QuizCapitales />}/>
              <Route path='quizdrapeaux' exact element={<QuizDrapeaux />}/>
              <Route path='pageworldmap' exact element={<Pageworldmap />}/>
              <Route path='listofstates' exact element={<Listofstates />}/>
              <Route path='quizresult' exact element={<QuizResult />}/>
              <Route path='*' element={<Erreur_404 />}/>
          </Routes>
        </BrowserRouter> 
      <Footer /> 
    </div>
  )
}

export default App;
