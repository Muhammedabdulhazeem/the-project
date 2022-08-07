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
import upIcon from '../assets/icons/arrow-up.svg'
import { useState } from 'react'

const Sidebar = ({sidebarProps:{ onUni, onSpecial, handleOnUni, handleOnSpecial }}) => {
    const [showProg, setShowProg] = useState(false)
    const [showAdm, setShowAdm] = useState(false)
    const [showProf, setShowProf] = useState(false)
    const [showWeb, setShowWeb] = useState(false)

    return(
        <section className="sidebar">
            <div className="edu"><span>Eduglobe</span></div>
            <div className="option-wrapper">
                <div className="dash-opts-top">
                    <div className="single-opt">
                        <div className="single-opt-wrap">
                            <div className="d-img">
                                <img src={dashIcon} alt="dash-icon" />
                            </div>
                            <span>Dashboard</span>    
                        </div>           
                    </div>
                    <div className="single-opt">
                        <div className="single-opt-wrap">
                            <div className="d-img">
                                <img src={progIcon} alt="prog-icon" />
                            </div>
                            <span>Program</span>
                            <div onClick={() => setShowProg(!showProg)} className="down-arrow">
                                <img src={showProg? upIcon : downIcon} alt="down arrow" />
                            </div>
                        </div>
                        <div className={showProg? "prog-opts-wrap fade-opt" : "prog-opts-wrap"}>
                            <div className="prog-opts">
                                <span style={{
                                    backgroundColor: onUni? "#EFF8FF" : "#0D2C58", 
                                    color: onUni? "#0D2C58" : "#fff",
                                }} onClick={handleOnUni}>University</span>
                                <span style={{
                                    backgroundColor: onSpecial? "#EFF8FF" : "#0D2C58", 
                                    color: onSpecial? "#0D2C58" : "#fff",
                                }} onClick={handleOnSpecial}>Specialization</span>
                                <span>Exams</span>
                            </div>
                        </div>
                    </div>
                    <div className="single-opt">
                        <div className="single-opt-wrap">
                            <div className="d-img">
                                <img src={adIcon} alt="admission-icon" />
                            </div>
                            <span>Admission</span>
                            <div onClick={() => setShowAdm(!showAdm)} className="down-arrow">
                                <img src={showAdm? upIcon : downIcon} alt="down arrow" />
                            </div>
                        </div>

                        <div className={showAdm? "prog-opts-wrap fade-opt" : "prog-opts-wrap"}>
                            <div className="prog-opts">
                                <span style={{
                                    backgroundColor: onUni? "#EFF8FF" : "#0D2C58", 
                                    color: onUni? "#0D2C58" : "#fff",
                                }} onClick={handleOnUni}>University</span>
                                <span style={{
                                    backgroundColor: onSpecial? "#EFF8FF" : "#0D2C58", 
                                    color: onSpecial? "#0D2C58" : "#fff",
                                }} onClick={handleOnSpecial}>Specialization</span>
                                <span>Exams</span>
                            </div>
                        </div>
                    </div>
                    <div className="single-opt">
                        <div className="single-opt-wrap">
                            <div className="d-img">
                                <img src={profIcon} alt="profile icon" />
                            </div>
                            <span>Profile</span>
                            <div onClick={() => setShowProf(!showProf)} className="down-arrow">
                                <img src={showProf? upIcon : downIcon} alt="down arrow" />
                            </div>
                        </div>

                        <div className={showProf? "prog-opts-wrap fade-opt" : "prog-opts-wrap"}>
                            <div className="prog-opts">
                                <span style={{
                                    backgroundColor: onUni? "#EFF8FF" : "#0D2C58", 
                                    color: onUni? "#0D2C58" : "#fff",
                                }} onClick={handleOnUni}>University</span>
                                <span style={{
                                    backgroundColor: onSpecial? "#EFF8FF" : "#0D2C58", 
                                    color: onSpecial? "#0D2C58" : "#fff",
                                }} onClick={handleOnSpecial}>Specialization</span>
                                <span>Exams</span>
                            </div>
                        </div>
                    </div>
                    <div className="single-opt">
                        <div className="single-opt-wrap">
                            <div className="d-img">
                                <img src={inboxIcon} alt="inbox-icon" />
                            </div>
                            <span>Inbox</span>
                        </div>
                    </div>
                    <div className="single-opt">
                        <div className="single-opt-wrap">
                            <div className="d-img">
                                <img src={webinarIcon} alt="webinar-icon" />
                            </div>
                            <span>Webinar</span>
                            <div onClick={() => setShowWeb(!showWeb)} className="down-arrow">
                                <img src={showWeb? upIcon : downIcon} alt="down arrow" />
                            </div>
                        </div>

                        <div className={showWeb? "prog-opts-wrap fade-opt" : "prog-opts-wrap"}>
                            <div className="prog-opts">
                                <span style={{
                                    backgroundColor: onUni? "#EFF8FF" : "#0D2C58", 
                                    color: onUni? "#0D2C58" : "#fff",
                                }} onClick={handleOnUni}>University</span>
                                <span style={{
                                    backgroundColor: onSpecial? "#EFF8FF" : "#0D2C58", 
                                    color: onSpecial? "#0D2C58" : "#fff",
                                }} onClick={handleOnSpecial}>Specialization</span>
                                <span>Exams</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dash-opts-bottom">
                    <div className="single-opt">
                        <div className="single-opt-wrap">
                            <div className="d-img">
                                <img src={referIcon} alt="refer-icon" />
                            </div>
                            <span>Refer and Earn</span>
                        </div>
                    </div>
                    <div className="single-opt">
                        <div className="single-opt-wrap">
                            <div className="d-img">
                                <img src={logoutIcon} alt="logout-icon" />
                            </div>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Sidebar;


// {showProg? "prog-opts show-prog" : "prog-opts"}
