// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Intro from '../src/pages/Intro';
// import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
// import Home from '../src/pages/Home';
// import Projects from '../src/pages/Projects';
// import GuestBook from './pages/GuestBook';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Intro />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/projects" element={<Projects />} />
//         <Route path="/guestbook" element={<GuestBook />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Intro from '../src/pages/Intro';
import Home from '../src/pages/Home';
import Projects from '../src/pages/Projects';
import GuestBook from './pages/GuestBook';

function App() {
  return (
    <Router>  {/* HashRouter 사용 */}
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/guestbook" element={<GuestBook />} />
      </Routes>
    </Router>
  );
}

export default App;
