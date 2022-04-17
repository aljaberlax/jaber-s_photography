import { Route, Routes } from "react-router-dom";
import About from "./About/About";
import Booking from "./Booking/Booking";
import Contact from "./ContactUs/Contact";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Packeges from "./Packeges/Packeges";
import PackegeWithDetails from "./PackegeWithDetails/PackegeWithDetails";
import Register from "./Register/Register";
import RequireAuth from "./RequireAuth/RequireAuth";




function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/home" element={<Home></Home>}></Route>
      <Route path="/packeges" element={<PackegeWithDetails></PackegeWithDetails>}></Route>
      <Route path="/booking" element={<RequireAuth>
        <Booking></Booking>
      </RequireAuth>}>
        
      </Route>
      <Route path="/contact" element={<Contact></Contact>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
