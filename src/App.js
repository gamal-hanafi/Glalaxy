import { Route, Routes,BrowserRouter as Router } from 'react-router-dom';
import Allplanets from './allPlanets';
import Astronaut from './astronaut';
import './css/App.css';
import Earth from './earth';
import Mars from './Mars';
import Main from './main';
import Navbar from './Navbar';
import Planets from './Planets';
import Skills from './Skills';
import SpaceGames from './spaceGames';
import Animation from './animation';
import GetTouch from './getTouch';
import Footer from './footer';
function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Main/>
      <Skills/>
      <Routes>
        <Route path='*' element={<Planets/>}>
          <Route path='earth' element={<Earth/>}/>
          <Route path='jupiter' element={<Mars/>}/>
          <Route path='' element={<Allplanets  />}/>
        </Route>
      </Routes>
      <Astronaut/>
      <SpaceGames/>
      <Animation/>  
      <GetTouch/>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
