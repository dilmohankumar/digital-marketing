import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from "./components/header/header";
import AboutPage from "./pages/aboutpage/about";
import HomePage from "./pages/homepage/home";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className=''>   
      <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
     
      <Footer/>
    </Router>
</div>
  );
}

export default App;
