import NavDash from '../../components/NavDash';
import Sidebar from '../../components/Sidebar';
import './StudentDashboard.css'
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Dashboard from '../../components/studentComp/Dashboard';
import UniPage from '../../components/uniPage/UniPage';
import Exams from '../../components/examComp/Exams';
import Profile from '../../components/profile/Profile';
import Inbox from '../../components/inbox/Inbox';
import AdmissionHome from '../../components/admission/AdmissionHome';
import Webinar from '../../components/webinar/Webinar';
import PersonalHome from '../../components/personalProfile/PersonalHome';

const StudentDashboard = () => {
    const [onUni, setOnUni] = useState(false)
    const [onSpecial, setOnSpecial] = useState(false)
    const [onExams, setOnExams] = useState(false)
    // const [showNavs, setShowNavs] = useState(true)

    const handleOnUni = () => {
        setOnSpecial(false)
        setOnExams(false)
        setOnUni(true)
    } 
    
    const handleOnSpecial = () => {
        setOnUni(false)
        setOnExams(false)
        setOnSpecial(true)
    }

    const handleOnExams = () => {
        setOnUni(false)
        setOnSpecial(false)
        setOnExams(true)
    }

    const sidebarProps = { onUni, onSpecial, onExams, handleOnExams, handleOnUni, handleOnSpecial }

    return (
        <section className="student-dash">
            <NavDash />
            <Sidebar sidebarProps={sidebarProps}/>
            
            <Routes>
                <Route path='' element={ <Dashboard /> }/>      
                <Route path='unipage' element={ <UniPage sidebarProps={sidebarProps} /> }/>      
                <Route path='exams/*' element={ <Exams /> }/>    
                <Route path='admission/*' element={ <AdmissionHome /> }/>    
                <Route path='profile/*' element={ <Profile /> } />  
                <Route path='inbox' element={ <Inbox /> }/>
                <Route path='webinar/*' element={ <Webinar /> }/>
                <Route path='personal/*' element={ <PersonalHome /> }/>
            </Routes>
        </section>
    );
    
}

export default StudentDashboard;