import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/sections/Footer';
import FloatingPawPrints from './components/ui/FloatingPawPrints';
import ScrollToTop from './components/ui/ScrollToTop';
import Chatbot from './components/ui/Chatbot';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';

function App() {
  return (
    <div className="min-h-screen bg-[#fefdfb]">
      <FloatingPawPrints />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes>
          <Route
            path="/"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>
      <Footer />
      <ScrollToTop />
      <Chatbot />
    </div>
  );
}

export default App;
