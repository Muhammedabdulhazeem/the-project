import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import PhoneCode from './components/PhoneCode';
import Signup from './pages/signup/Signup';
import StudentDashboard from './pages/studentDashboard/StudentDashboard';
import UniPage from './components/uniPage/UniPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Signup />}/>
          <Route path='/dashboard/*' element={<StudentDashboard />}/>
        </Routes>
        {/* <UniPage /> */}
        {/* <Dashboard /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;

