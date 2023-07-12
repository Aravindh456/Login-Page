import './App.css';
import './login.css';
import LoginPage from './login';
import ForgotPage from './forgot';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/forgot" element={<ForgotPage/>}/>
      </Routes>
    </div>
  </Router>
  );
}

export default App;
