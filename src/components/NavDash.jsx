import './NavDash.css'
import bellIcon from '../assets/icons/bell-icon.svg'
import downIcon from '../assets/icons/drop-down-icon.svg'


const NavDash = () => {

    return(
        <div className="nav-dash">
            <div className="nav-wrapper">
                <div className="bell-icon">
                    <img src={bellIcon} alt="bell-icon" />
                </div>
                <div className="cj-icon"><span>cj</span></div>
                <span>Clara John</span>
                <div className="drp-dwn">
                    <img src={downIcon} alt="down arror" />
                </div>
            </div>
        </div>
    );
}

export default NavDash;