
import Hero from './components/Hero';
import ThreeBackground from './components/ThreeBackground';
import TechStack from './components/TechStack';
import About from './components/About';
import Contact from './components/Contact';
import './styles/global.css';

function App() {
  return (
    <div className="App">
      <div className="background-overlay" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        background: 'radial-gradient(circle at 50% 50%, #1a1a1a 0%, #0a0a0a 100%)'
      }}></div>
      <ThreeBackground />
      <Hero />
      <About />
      <TechStack />
      <Contact />
    </div>
  );
}

export default App;
