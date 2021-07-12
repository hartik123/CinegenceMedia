import React,{useState} from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Home from './pages/Home.js';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import About from './pages/About';
import {Parallax} from 'react-parallax';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Product from './pages/Product';




// export const UserContext = React.createContext();

function App() {

  const [state, setState] = useState(false);


  const inlineStyle={
    background: '#fff',
    left: '50%',
    top: '50%',
    position: 'absolute',
    padding: '20px',
    transform: 'translate(-50%, -50%)',
    backgroundColor: "#000",
    color: "white"
  }
  
  return (
    <div className="App">
      
        <Navbar />
               {/* <UserContext value={{state, setState}}> */}

      {/* <Projects 
      title="Projects"
      dark={true}
      id="projects"
      /> */}

      {/* <Parallax bgImage={image1} strength={500}>
      <div style={{height: "500px"}}>
      <div style={inlineStyle}>
          Created Parllax in React
        </div>
      </div>
      </Parallax>  */}
      
      <Home 
      title="home"
      dark={true}
      id="home"
      />
      {/* </UserContext> */}

   
      </div>
      );
      
}

    export default App;

            


