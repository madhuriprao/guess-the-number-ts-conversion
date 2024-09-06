
import "./header.css"
import Togglebtn from "./togglebtn";
const Header = () => {
   
  return(
      <>
     <nav>
        
     <h1 className="heading">Guess the Number Game</h1>
     <div className="header-content">
        <h1>My App</h1>
        {/* Dark mode switch */}
        <Togglebtn />
      </div>
     
      </nav></>
      )
}

export default Header;