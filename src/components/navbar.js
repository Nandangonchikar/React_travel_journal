import '../style.css'
import globe_logo from "../images/earth.png";

export default function Navbar()
{ return(
    <div className="navbar">
        <img src={globe_logo} alt="logo" className='navbar-logo'></img>
        <h2 className='navbar-title'>my travel journal</h2>
    </div>
)
}