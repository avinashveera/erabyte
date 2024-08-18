import Home from './Conponents/Home/Home';
import './App.css';
import Nav from "./Conponents/Nav/Nav.jsx"
import Footer from './Conponents/Footeer/Footer.jsx'
import Maeketing from "./Conponents/pages/Marketing.jsx"
import Pricing from './Conponents/pricing/Pricing';
import Web from "./Conponents/pages/web.jsx"
import Android from "./Conponents/pages/Android.jsx"
import Services from './Conponents/pages/Services.jsx';
import {
  Routes,
  Route,
} from "react-router-dom";



function App() {
  return (

    <div className="App">
   
    
      <Nav />
      <Routes>
      <Route path="/" element={<Home />}> </Route>

      <Route path="/web" element={<Web />}> </Route>
      <Route path="/service" element={<Services />}> </Route>
      <Route path="/marketing" element={<Maeketing />}> </Route>
      <Route path="/android" element={<Android />}> </Route>
          <Route path="/pricing" element={<Pricing />}> </Route>
          
          </Routes>


     <Footer/>
    
     
  

    
    </div>
  );
}

export default App;
