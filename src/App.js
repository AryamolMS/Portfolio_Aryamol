import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import About from './components/Home/About';
import Experience from './components/Experience/Experience';
import Skill from './components/Skills/Skill';
import Education from './components/education/Education';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/experience' element={<Experience/>}/>
        <Route path='/skills' element={<Skill/>}/>
        <Route path='/education' element={<Education/>}/>
        <Route path='/projects' element={<Projects/>}/>

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
