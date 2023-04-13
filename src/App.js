import './App.css';
import Homepage from './pages/Homepage'
import BookingPage from './pages/BookingPage';
import ConfirmedPage from './pages/ConfirmedPage'
import {Routes,Route} from "react-router-dom";


function App() {

  return (
  <div className="container">
  <Routes>
    <Route exact path="/" element={<Homepage/>}></Route>
    <Route exact path="/booking" element={<BookingPage/>}/>
    <Route exact path="/confirmed" element={<ConfirmedPage/>}/>
  </Routes>
  </div>
  );
}

export default App;
