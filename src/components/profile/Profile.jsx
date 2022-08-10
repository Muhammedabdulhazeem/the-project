import { Route, Routes } from 'react-router-dom';
import ProfDocuments from './ProfDocuments';
import './Profile.css'
import ViewProfile from './ViewProfile';

const Profile = () => {
    return (  
        <div className="profile-page">
            <Routes>
                <Route path=''element={ <ViewProfile /> }/>
                <Route path='documents'element={ <ProfDocuments /> }/>
            </Routes>
        </div>
    );
}
 
export default Profile;