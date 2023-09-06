import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';

function App() {
  console.log(window.screen.height)
  return (
    <div className="App">
      <div className='divider'></div>
      <Navbar />
      <Home />
      <div className='footer-divider'></div>
    </div>
  );
}

export default App;
