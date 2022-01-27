import logo from './assets/DiviciMeaderyLogoB.png';
import meads from './data/meads';
import bottleImg from './assets/MeadBottle1.png';


function App() {
  return (
    <div className="App">
      <header>
        <div className="logo">
          <img src={logo} alt='logo'></img>
        </div>
        <div className="nav">
          <a>In Progress</a>
          <a>Finished Meads</a>
          <a>Contact Me</a>
        </div>
      </header>
      
      <div className='banner'>
        <div className='float-text'>
          <h1>Distinguished<br></br>Meads</h1>
          <p>Welcome to Divici's online mead resource. Here you will be able to find the wide range of experimental meads as well as refined meads I have created over the last few years. It is also just a place to track what I'm currently working on as well as leave some tips on how to recreate my recipes.</p>
          <button>See All</button>
        </div>
        <div className='float-right'></div>
      </div>

      {/* list of meads component */}
      <div className='best-header'>
        <p>Check out some of my work</p>
        <h2>Best Finished Meads</h2>
      </div>

      {/* mapping list start */}
      <div className='best-meads'>  

        <div className='quick-info flex'>
          <div className='info'>
            <h3>White Chocolate Caramel Mead</h3>
            <h4>Decadent and Bold</h4>
            <p>This experimental mead came from my love for white chocolate. It is a mix of floral notes with a buttery caramel throughout, leaving a subtle hint of white chocolate behind.</p>
            <button>Details</button>
          </div>

          <div className='mead-img'>
            <img src={bottleImg} alt='bottle of mead'></img>
          </div>
        </div>

        <div className='quick-info flex'>
          <div className='info'>
            <h3>White Chocolate Caramel Mead</h3>
            <h4>Decadent and Bold</h4>
            <p>This experimental mead came from my love for white chocolate. It is a mix of floral notes with a buttery caramel throughout, leaving a subtle hint of white chocolate behind.</p>
            <button>Details</button>
          </div>

          <div className='mead-img'>
            <img src={bottleImg} alt='bottle of mead'></img>
          </div>
        </div>

      </div>
      
    </div>
  );
}

export default App;
