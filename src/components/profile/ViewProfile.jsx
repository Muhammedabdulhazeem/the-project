import './ViewProfile.css'
import progBar from '../../assets/icons/prog-bar.svg'
import editIcon from '../../assets/icons/edit-icon.svg'
import camera from '../../assets/icons/camera-image.svg'
import callIcon from '../../assets/icons/call-icon.svg'
import whatsAppIcon from '../../assets/icons/whatsapp-icon.svg'
import emailIcon from '../../assets/icons/email-icon.svg'
import locationIcon from '../../assets/icons/location-icon.svg'
import calendarIcon from '../../assets/icons/calendar-icon.svg'
import genderIcon from '../../assets/icons/gender-icon.svg'
import courseIcon from '../../assets/icons/course-icon.svg'
import specialIcon from '../../assets/icons/special-icon.svg'
import capIcon from '../../assets/icons/cap-icon.svg'
import worldIcon from '../../assets/icons/world-icon.svg'
import walletIcon from '../../assets/icons/wallet-icon.svg'

const ViewProfile = () => {
    return (
        <div className="view-profile">
            <div className="prof-head">
                <h1>Student Profile</h1>
                <div>
                    <span>3 pending actions</span>
                    <div className="progress-bar">
                        <img src={progBar} alt="progress-bar" />
                    </div>
                </div>
            </div>
            <div className="profile-info">
                <div className="pencil">
                    <img src={editIcon} alt="edit-icon" />
                </div>
                <div className="top">
                    <div className="camera">
                        <img src={camera} alt="camera-image" />
                    </div>

                    <div className="cam-side">
                        <h2>Clara John</h2>
                        <div className="nums">
                            <div className="nums-wrap">
                                <div>
                                    <img src={emailIcon} alt="email-icon" />
                                </div>
                                <span>ClaraJ2@gmail.com</span>
                            </div>
                            <div className="nums-wrap">
                                <div>
                                    <img src={callIcon} alt="call-icon" />
                                </div>
                                <span>+9956248865</span>
                            </div>
                            <div className="nums-wrap">
                                <div>
                                    <img src={whatsAppIcon} alt="whatsapp-icon" />
                                </div>
                                <span>+9956248865</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <div className='btm-wrap'>
                        <div>
                            <img src={locationIcon} alt="location-icon" />
                        </div>
                        <span>Add location</span>
                    </div>
                    <div className='btm-wrap'>
                        <div>
                            <img src={calendarIcon} alt="calendar-icon" />
                        </div>
                        <span>Add DOB</span>
                    </div>
                    <div className='btm-wrap'>
                        <div>
                            <img src={genderIcon} alt="gender-icon" />
                        </div>
                        <span>Add gender</span>
                    </div>
                </div>
            </div>

            <div className="prof-head">
                <h1>Study Prefrence</h1>
                <div>
                    <span>5 pending actions</span>
                    <div className="progress-bar">
                        <img src={progBar} alt="progress-bar" />
                    </div>
                </div>
            </div>
            <div className="below-pref">
                <div className="pencil">
                    <img src={editIcon} alt="edit-icon" />
                </div>
                <div className="left-pref">
                    <div className="pref-wrap">
                        <div className="pref-name">
                            <div>
                                <img src={courseIcon} alt="course-icon" />
                            </div>
                            <span>Preferred course</span>
                        </div>
                        <span className='pref-gray'>Chemical Engineering</span>
                        <div className="select-div">
                            <select name="" id="">
                                <option value="chemical eng">Chemical Engineering</option>
                                <option value="medicine">Medicine</option>
                                <option value="physiology">Physiology</option>
                            </select>
                        </div>
                    </div>
                    <div className="pref-wrap">
                        <div className="pref-name">
                            <div>
                                <img src={specialIcon} alt="special-icon" />
                            </div>
                            <span>Specialization</span>
                        </div>
                        <span className='pref-red'>Add specialization</span>
                        <div className="select-div">
                            <select name="" id="">
                                <option value="chemical eng">Add specialization</option>
                                <option value="medicine">Medicine</option>
                                <option value="physiology">Physiology</option>
                            </select>
                        </div>
                    </div>
                    <div className="pref-wrap">
                        <div className="pref-name">
                            <div>
                                <img src={capIcon} alt="cap-icon" />
                            </div>
                            <span>Course level</span>
                        </div>
                        <span className='pref-red'>Add course level</span>
                        <div className="select-div">
                            <select name="" id="">
                                <option value="chemical eng">Add level</option>
                                <option value="medicine">100 lvl</option>
                                <option value="physiology">200 lvl</option>
                            </select>
                        </div>
                    </div>
                    <div className="pref-wrap">
                        <div className="pref-name">
                            <div>
                                <img src={worldIcon} alt="world-icon" />
                            </div>
                            <span>Country of choice</span>
                        </div>
                        <span className='pref-gray'>Add country</span>
                        <div className="select-div">
                            <select name="" id="">
                                <option value="chemical eng">Add country</option>
                                <option value="medicine">Medicine</option>
                                <option value="physiology">Physiology</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="right-pref">
                    <div className="pref-wrap">
                        <div className="pref-name">
                            <div>
                                <img src={calendarIcon} alt="calendar-icon" />
                            </div>
                            <span>Intake</span>
                        </div>
                        <span className='pref-gray'>August 2022</span>
                        <div className="select-div">
                            <input type="date"  />
                        </div>
                    </div>
                    <div className="pref-wrap">
                        <div className="pref-name">
                            <div>
                                <img src={walletIcon} alt="wallet-icon" />
                            </div>
                            <span>Budget</span>
                        </div>
                        <span className='pref-red'>Add a budget</span>
                        <div className="select-div">
                            <input 
                                type="text" 
                                placeholder='Add a budget'
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="prof-head">
                <h1>Education </h1>
            </div>
            <div className="below-edu">
                <div className="pencil">
                    <img src={editIcon} alt="edit-icon" />
                </div>

                <h2>Graduation</h2>
                <p>CGPA 3.99</p>
                <p>June 2015 - December 2021</p>
            </div>

            <div className="prof-head">
                <h1>Test Score </h1>
            </div>
            <div className="below-test-score">
                <div className="pencil">
                    <img src={editIcon} alt="edit-icon" />
                </div>
                <div className="ielt">
                    <span className='big-text'>IELTS</span>
                    <span>5</span>
                </div>
                <div className="gmat">
                    <span className='big-text'>GMAT</span>
                    <span>550</span>
                </div>
            </div>

        </div>
    );
}
 
export default ViewProfile;