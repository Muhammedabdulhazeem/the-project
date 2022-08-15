import { Route, Routes } from 'react-router-dom';
import './AdmissionHome.css'
import AppliedAt from './AppliedAt';
import AppStatus from './AppStatus';

const AdmissionHome = () => {
    return (
        <div className="admission-home">
            <Routes>
                <Route path='' element={ <AppliedAt /> }/>
                <Route path='/application-status/*' element={ <AppStatus/> } />
            </Routes>
        </div>
    );
}
 
export default AdmissionHome;