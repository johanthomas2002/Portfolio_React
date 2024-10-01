import './App.css';
import Header from './Components/Header';
import Video from './Components/Video';
import Intro from './Components/Intro';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router> {/* Move Router here to wrap all components */}
      <Header />
      <Routes>
        <Route path="/" element={<Video />} />
        <Route path="/about" element={<Intro />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
