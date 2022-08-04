import NavDash from './NavDash';
import Sidebar from './Sidebar';
import './StudentDashboard.css'
import progBar from '../assets/images/progress-bar.png'
import hrLine from '../assets/images/hr-line.png'

const StudentDashboard = () => {

    return (
        <section className="student-dash">
            <NavDash />
            <Sidebar />
            <div className="main-content">
                <div className="content-wrapper">
                    <div className="top-content">
                        <div className="top-left">
                            <div className="top-left-wrapper">
                                <div className="prof-content">
                                    <div className="prof-cont-wrapper">
                                        <div className="prof-div">
                                            <h1>Profile Completion</h1>
                                            <div className="prog-bar">
                                                <img src={progBar} alt="prog-bar" />
                                            </div>
                                        </div>

                                        <p>Please complete your profile to identify the list of most relevant universities for you</p>

                                        <div className="prof-nav">
                                            <button>Personal Info</button>
                                            <button>Educational Info</button>
                                            <button>Test Score</button>
                                            <button>Experience</button>
                                        </div>

                                        <div className="prof-hr-line">
                                            <img src={hrLine} alt="hr-line" />
                                        </div>

                                        <button className='complete'>Complete all fields</button>
                                    </div>
                                </div>

                                <div className="eval-wrapper">
                                    <div className="eval-contain">
                                        <div className="eval">
                                            <p>Profile eveluations report</p>
                                            <span>10 recommendations based on your profile evaluation</span>
                                            <div className="down-ar">
                                                <img src="" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="eval-contain">
                                        <div className="eval">
                                            <p>Your Applications</p>
                                            <span>0 application</span>
                                            <div className="down-ar">
                                                <img src="" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="eval-contain">
                                        <div className="eval">
                                            <p>Shortlist your universities</p>
                                            <span>0 application</span>
                                            <div className="down-ar">
                                                <img src="" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <button className="eligible">Check Eligibility</button>
                            </div>
                        </div>
                        <div className="top-right"></div>
                    </div>
                    <div style={{border: '3px solid brown'}} className="bottom-content"><h1>HELLOO</h1></div>
                </div>
            </div>
        </section>
    );
    
}

export default StudentDashboard;