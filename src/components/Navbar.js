import { BsArrowRight } from "react-icons/bs";
import '../css/Navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <p className="navbar_title">Keywords</p>
            <form className="navbar_search">
                <input type="text" />
                <button type="submit">Submit  <BsArrowRight className="navbar_searchArrow" /></button>
            </form>
            <p className="navbar_userIcon">A</p>
        </div>
    )
}

export default Navbar
