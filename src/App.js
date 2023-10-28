import {  Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { GithubProvider } from "./context/github/GithubContex";
import { AlertProvider } from "./context/alert/alertContext";
import Alert from "./components/layout/Alert";
import User from "./pages/User";
function App() {
  return (
    <GithubProvider>
        <AlertProvider>

      <div className="flex flex-col justify-between h-screen">
        <Navbar/> 

        <main className="container mx-auto px-3 pb-12">
          <Alert/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/user/:login" element={<User/>}/>
            <Route path="/notfound" element={<NotFound/>}/>
            <Route path="/*" element={<NotFound/>}/>
          </Routes>
        </main>

        <Footer/>
      </div> 
     
       </AlertProvider>
    </GithubProvider>
  );
}

export default App;
