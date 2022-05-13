import './App.scss';
import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/intro'
import Portfolio from './components/portfolio/Portfolio';
import Work from './components/works/works';
import Languages from './components/languages/languages';
import Contact from './components/contact/contact';
import Menu from './components/menu/menu';
import { useState } from 'react';

function App() {

  //For our menu 
  const [menuOpen, setMenuOpen] = useState(false)


  return (
    <div className="App">
      {/*Structure of Portfolio:
        top
        section:
          - intro
          - portfolio
          - work page
          - languages
          - email 
      */}
      <Topbar menuOpen= {menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen= {menuOpen} setMenuOpen={setMenuOpen}/>
      {/*Because we're using .jsx, I simply have to type .sections to create the div below */}
      <div className="sections">
          <Intro/>
          <Portfolio/>
          <Work/>
          <Languages/>
          <Contact/>
      </div>
    </div>
  );
}

export default App;
