
import { useState } from 'react'; 
import './App.css';
import { LoadingScreen } from './Components/LoadingScreen';
import "./index.css";
import { Navbar } from './Components/Navbar';
import { MobileMenu } from './Components/MobileMenu';
import { Home } from './Components/Section/Home';
import { About } from './Components/Section/About';
import { Projects } from './Components/Section/Projects'; 
import { Contact } from './Components/Section/Contact';
import { ResumeUploader } from './Components/ResumeUploader';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      
     
      <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}>

        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        
        <Home/>
        <About/>
        <Projects/>
         <Contact/> 
        <ResumeUploader/>
        
      </div>  
    </>
  ); 
}

export default App;
