import logo from './../assets/DiviciMeaderyLogoB.png'

const Header = () => {
    <div>
        <header>
            <div className="">
                <img src={logo} alt='logo'></img>
            </div>
            <div className="">
                <a>In Progress</a>
                <a>Finished Meads</a>
                <a>Contact Me</a>
            </div>
        </header> 
    </div>
} 

export default Header;