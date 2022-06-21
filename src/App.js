import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu, Home, Meads } from './container';
import { Route, Routes } from "react-router-dom";
import { Navbar } from './components';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>

        <Route path='/*' element={<Home />} />
        {/* <Route path={`/meads/:id`} element={<Mead/>} /> */}
        <Route path='/meads' element={<Meads/>} />
        
      </Routes>
    </div>
  );
}

export default App;
