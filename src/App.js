import './App.css';
import About from './component/About';
import ContactMap from './component/ContactMap';
import Footer from './component/Footer';
import Headerr from './component/Headerr';
import Home from './component/Home';
import Projects from './component/Projects';
import Review from './component/Review';
import Services from './component/Services';
function App() {
  return (
    <div>
      <Headerr/>
      <Home/>
      <About/>
      <Services/>
      <Projects/>
      <Review/>
      <ContactMap/>
      <Footer/>
    </div>
  );
}

export default App;
