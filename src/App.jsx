import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage'
import login from './pages/login';
import signup from './pages/signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/convioo" Component={LandingPage} />
        <Route path="/login" Component={login} />
        <Route path="/signup" Component={signup} />
      </Routes>
    </Router>
  );
}

export default App;