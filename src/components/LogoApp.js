import Logo from "../images/logo.png";
import '../styles/LogoApp.css';

export function LogoApp(){
  return(
    <div className="LogoApp">
      <img className="LogoApp__img" src={Logo} alt="Logo"/>
    </div>
  )
}