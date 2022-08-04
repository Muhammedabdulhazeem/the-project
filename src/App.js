import './App.css';
import PhoneCode from './components/PhoneCode';
import StudentDashboard from './components/StudentDashboard';
import Signup from './pages/signup/Signup';

function App() {
  return (
    <div className="App">
      {/* <Signup /> */}
      <StudentDashboard />
    </div>
  );
}

export default App;
