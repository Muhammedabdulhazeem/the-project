import './Sidebar.css'
import dashIcon from '../assets/icons/dash-icon.svg'
import progIcon from '../assets/icons/prog-icon.svg'
import profIcon from '../assets/icons/prof-icon.svg'
import adIcon from '../assets/icons/admission-icon.svg'
import inboxIcon from '../assets/icons/inbox-icon.svg'
import webinarIcon from '../assets/icons/webinar-icon.svg'
import referIcon from '../assets/icons/refer-icon.svg'
import logoutIcon from '../assets/icons/logout-icon.svg'
import downIcon from '../assets/icons/drop-down-icon.svg'

const Sidebar = () => {

    return(
        <section className="sidebar">
            <div className="edu"><span>Eduglobe</span></div>
            <div className="option-wrapper">
                <div className="dash-opts-top">
                    <div className="single-opt">
                        <div className="d-img">
                            <img src={dashIcon} alt="dash-icon" />
                        </div>
                        <span>Dashboard</span>               
                    </div>
                    <div className="single-opt">
                        <div className="d-img">
                            <img src={progIcon} alt="prog-icon" />
                        </div>
                        <span>Program</span>
                        <div className="down-arrow">
                            <img src={downIcon} alt="down arrow" />
                        </div>
                    </div>
                    <div className="single-opt">
                        <div className="d-img">
                            <img src={adIcon} alt="admission-icon" />
                        </div>
                        <span>Admission</span>
                        <div className="down-arrow">
                            <img src={downIcon} alt="down arrow" />
                        </div>
                    </div>
                    <div className="single-opt">
                        <div className="d-img">
                            <img src={profIcon} alt="profile icon" />
                        </div>
                        <span>Profile</span>
                        <div className="down-arrow">
                            <img src={downIcon} alt="down arrow" />
                        </div>
                    </div>
                    <div className="single-opt">
                        <div className="d-img">
                            <img src={inboxIcon} alt="inbox-icon" />
                        </div>
                        <span>Inbox</span>
                    </div>
                    <div className="single-opt">
                        <div className="d-img">
                            <img src={webinarIcon} alt="webinar-icon" />
                        </div>
                        <span>Webinar</span>
                        <div className="down-arrow">
                            <img src={downIcon} alt="down arrow" />
                        </div>
                    </div>
                </div>
                <div className="dash-opts-bottom">
                    <div className="single-opt">
                        <div className="d-img">
                            <img src={referIcon} alt="refer-icon" />
                        </div>
                        <span>Refer and Earn</span>
                    </div>
                    <div className="single-opt">
                        <div className="d-img">
                            <img src={logoutIcon} alt="logout-icon" />
                        </div>
                        <span>Logout</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Sidebar;