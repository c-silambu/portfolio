import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import ContactMe from './components/Contact/ContactMe';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <> 
      <Header/>
      <Hero/>
      <About/>
      <Skills/>
      <Education/>
      <ContactMe/>
      <Footer/>
    </>
  );
}

export default App;
