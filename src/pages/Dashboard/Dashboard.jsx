import { useState } from 'react';
import NavDash from '../../components/NavDash';
import Sidebar from '../../components/Sidebar';
import './Dashboard.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const Dashboard = () => {
    const [onUni, setOnUni] = useState(true)
    const [onSpecial, setOnSpecial] = useState(false)
    const [onExams, setOnExams] = useState(false)

    const handleOnUni = () => {
        setOnSpecial(false)
        setOnUni(true)
    } 
    
    const handleOnSpecial = () => {
        setOnUni(false)
        setOnSpecial(true)
    }

    const sidebarProps = { onUni, onSpecial, handleOnUni, handleOnSpecial }

    return(
        <div className="Dashboard">
            <NavDash />
            <Sidebar sidebarProps={sidebarProps}/>
        </div>
    );
}

export default Dashboard;