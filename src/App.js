import RGB from './components/RGB/RGB';
import NavBar from './components/NavBar/NavBar';
import NotFound from './components/NotFound/NotFound';

import './App.css';
import { Route, BrowserRouter as Router, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/rgb/10/22/42" />} />
            <Route path="/rgb/:r/:g/:b" element={<><NavBar /><RGB /></>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
