import react from "react";
import logo from './../assets/DiviciMeaderyLogoB.png'

const Header = () => {
    return (
        <div>
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
        </div>
    )
} 

export default Header;