import './App.css';
import Header from "./components/Header.js";
import Homepage from "./components/Homepage.js";
import Portfolio from "./components/Portfolio.js";
import Banner from "./components/Banner.js";
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Homepage />
      <Portfolio />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;

