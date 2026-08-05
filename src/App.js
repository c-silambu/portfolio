
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import ContactMe from './components/Contact/ContactMe';
import Footer from './components/Footer/Footer';
import Project from './components/project/Project';

function App() {
  return (
    <div className="app-grid relative min-h-screen overflow-hidden bg-ink"> 
      <div className="pointer-events-none fixed -left-40 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="pointer-events-none fixed -right-40 top-1/2 h-96 w-96 rounded-full bg-violet-500/10 blur-[120px]" />
      <Header/>
      <main className="relative z-10"><Hero/><About/><Skills/><Project/><Education/><ContactMe/></main>
      <Footer/>
    </div>
  );
}

export default App;
