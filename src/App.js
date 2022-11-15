import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Main from './pages/Main';
import PlaceToStay from './pages/PlaceToStay';
import {
  Routes,
  Route,
} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/place-to-stay" element={<PlaceToStay />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
