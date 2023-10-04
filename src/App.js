import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Homepage from './Component/Homepage';
import Plant from './Component/Plant';
import Gifts from './Component/Gifts';
import Seeds from './Component/Seeds';
import Combos from './Component/Combo';
import Blog from './Component/Blog';
import ContactUs from './Component/Contactus';
import Pots from './Component/Pots';



function App() {
  return (
    <>
      <Router>
        <Header/>
        <Navbar/>
        <Routes>
          <Route path ='/' element = {<Homepage/>}/>
          <Route path ='/plant' element={<Plant/>}/>
          <Route path ='/seeds' element={<Seeds/>}/>
          <Route path ='/gifts' element={<Gifts/>}/>
          <Route path ='/combo' element={<Combos/>}/>
          <Route path ='/pots' element={<Pots/>}/>
          <Route path ='/blog' element={<Blog/>}/>
          <Route path ='/contactus' element={<ContactUs/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
