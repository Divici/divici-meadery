import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu, Home } from './container';
import { Route, Routes } from "react-router-dom";
import { Navbar } from './components';



function App() {
  return (
    <div className="App">
      <Routes>

        <Route path='/*' element={<Home />} />
        {/* <SpecialMenu />
        <Chef />
        <Intro />
        <Laurels />
        <Gallery />
        <FindUs />
        <Footer /> */}
        
      </Routes>
    </div>
  );
}

export default App;
