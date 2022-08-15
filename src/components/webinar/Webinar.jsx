import { Link, Route, Routes } from 'react-router-dom';
import Upcoming from './Upcoming';
import './Webinar.css'
import WebinarIndex from './WebinarIndex';
import moreIcon from '../../assets/icons/more-icon.svg'
import { useState } from 'react';
import SlotBooking from './SlotBooking';

const Webinar = () => {
    const [track, setTrack] = useState("1")
    const [secTrack, setSecTrack] = useState("1")
    const [showNav, setShowNav] = useState(false)

    const nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]

    const tractFunc = (set, pick) => {
        nums.forEach(num => {
            if(pick === num) {
                set(pick)
            }
        })
    }

    return (
        <div className="webinar">
            <div className="webinar-wrapper">
            {showNav && (<>
                <nav className="first-nav">
                    <Link to='/dashboard/webinar' onClick={() => tractFunc(setTrack,"1")} className={track === "1"? "add-border-btm" : '' }>
                        <span >All Webinars</span>
                    </Link>
                    <Link to='/dashboard/webinar/upcoming' onClick={() => tractFunc(setTrack,"2")} className={track === "2"? "add-border-btm" : '' }>
                        <span>Upcoming Webinars</span>
                    </Link>
                    <Link to='/dashboard/webinar/past-web' onClick={() => tractFunc(setTrack,"3")} className={track === "3"? "add-border-btm" : '' }>
                        <span>Past Webinars</span>
                    </Link>
                </nav>

                <nav className="second-nav">
                    <button onClick={() => tractFunc(setSecTrack, "1")} className={secTrack === "1"? "on-country" : '' }>All</button>
                    <button onClick={() => tractFunc(setSecTrack, "2")} className={secTrack === "2"? "on-country" : '' }>Germany</button>
                    <button onClick={() => tractFunc(setSecTrack, "3")} className={secTrack === "3"? "on-country" : '' }>Australian</button>
                    <button onClick={() => tractFunc(setSecTrack, "4")} className={secTrack === "4"? "on-country" : '' }>Canada</button>
                    <button onClick={() => tractFunc(setSecTrack, "5")} className={secTrack === "5"? "on-country" : '' }>Uk</button>
                    <button onClick={() => tractFunc(setSecTrack, "6")} className={secTrack === "6"? "on-country" : '' }>New Zealand</button>
                    <div className="more">
                        <img src={moreIcon} alt="more" />
                    </div>
                </nav>
            </>)}

                <Routes>
                    <Route path='' element={ <WebinarIndex /> } />
                    <Route path='/upcoming' element={ <Upcoming /> } />                
                    <Route path='/book-a-slot' element={ <SlotBooking /> } />                
                </Routes>
            </div>
        </div>
    );
}
 
export default Webinar;