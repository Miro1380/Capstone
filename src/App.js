import './App.css';
import Homepage from './pages/Homepage'
import BookingPage from './pages/BookingPage';
import {Routes,Route} from "react-router-dom";


function App() {

  return (
  <div className="container">
  <Routes>
    <Route path="/" element={<Homepage/>}></Route>
    <Route path="/booking" element={<BookingPage/>}/>
  </Routes>
  </div>
  );
}

export default App;
