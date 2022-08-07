import { BrowserRouter } from 'react-router-dom';
import './App.css';
import PhoneCode from './components/PhoneCode';
import StudentDashboard from './components/StudentDashboard';
import Dashboard from './pages/Dashboard/Dashboard';
import Signup from './pages/signup/Signup';
import UniPage from './pages/uniPage/UniPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Signup /> */}
        {/* <StudentDashboard /> */}
        <UniPage />
        {/* <Dashboard /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
