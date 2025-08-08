import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Pages/Navbar';
// import FullProjectsPage from './Pages/FullProjectsPage';
import ProjectDetail from './Components/Projects/ProjectDetail';
import Footer from './Pages/Footer';
import HomeMain from './Pages/HomeMain';
import Projects from './Pages/Projects';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomeMain />} />
            <Route path="/projects" element={<Projects showAll={true} />} /> 
            <Route path="/projects/:id" element={<ProjectDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}