// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import HomePage from "./pages/HomePage";
// import AboutPage from "./pages/AboutPage";
// import QueryPage from "./pages/QueryPage";

// function App() {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/about" element={<AboutPage />} />
//         <Route path="/query" element={<QueryPage />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;
// import React, { useState } from 'react';
// import './App.css';
// import Header from './components/Header';
// import Features from './components/Features';
// import Testimonials from './components/Testimonials';
// import Footer from './components/Footer';
// import AuthModal from './components/AuthModal';
// import UserInfoForm from './components/UserInfoForm';
// import QueriesPage from './components/QueriesPage';

// const App = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isSignedUp, setIsSignedUp] = useState(false);

//   const handleGetStarted = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     window.history.back(); // Go back to the previous page when modal is closed
//   };

//   return (
//     <div className="App">
//       <Header onGetStarted={handleGetStarted} />
//       <Features />
//       <Testimonials />
//       <Footer />
      
//       {isModalOpen && !isSignedUp && <AuthModal closeModal={closeModal} setIsSignedUp={setIsSignedUp} />}
//       {isSignedUp && <UserInfoForm />}
//       {isSignedUp && <QueriesPage />}
//     </div>
//   );
// };

// export default App;


// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
// import './App.css';
// import Header from './components/Header';
// import Features from './components/Features';
// import Testimonials from './components/Testimonials';
// import Footer from './components/Footer';
// import AuthModal from './components/AuthModal';
// import UserInfoForm from './components/UserInfoForm';
// import QueriesPage from './components/QueriesPage';

// const App = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const navigate = useNavigate();

//   const handleGetStarted = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   const handleSignupSuccess = () => {
//     setIsModalOpen(false);
//     navigate('/user-info'); // Redirect to the user info form
//   };

//   return (
//     <div className="App">
//       <Header onGetStarted={handleGetStarted} />
//       <Routes>
//         <Route path="/" element={<><Features /><Testimonials /><Footer /></>} />
//         <Route path="/user-info" element={<UserInfoForm />} />
//         <Route path="/queries" element={<QueriesPage />} />
//       </Routes>
//       {isModalOpen && <AuthModal closeModal={closeModal} onSignupSuccess={handleSignupSuccess} />}
//     </div>
//   );
// };

// const MainApp = () => (
//   <Router>
//     <App />
//   </Router>
// );

// export default MainApp;

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import './App.css';
// import Header from './components/Header';
// import Features from './components/Features';
// import Testimonials from './components/Testimonials';
// import Footer from './components/Footer';
// import AuthModal from './components/AuthModal';
// import UserInfoForm from './components/UserInfoForm';
// import QueriesPage from './components/QueriesPage';

// const App = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isSignedUp, setIsSignedUp] = useState(false);

//   const handleGetStarted = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <>
//                 <Header onGetStarted={handleGetStarted} />
//                 <Features />
//                 <Testimonials />
//                 <Footer />
//                 {isModalOpen && (
//                   <AuthModal closeModal={closeModal} setIsSignedUp={setIsSignedUp} />
//                 )}
//               </>
//             }
//           />
//           <Route
//             path="/userinfo"
//             element={isSignedUp ? <UserInfoForm /> : <Navigate to="/" />}
//           />
//           <Route
//             path="/queries"
//             element={isSignedUp ? <QueriesPage /> : <Navigate to="/" />}
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// // export default App;
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import './App.css';
// import Header from './components/Header';
// import Features from './components/Features';
// import Testimonials from './components/Testimonials';
// import Footer from './components/Footer';
// import AuthModal from './components/AuthModal';
// import UserInfoForm from './components/UserInfoForm';
// import QueriesPage from './components/QueriesPage';

// const App = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isSignedUp, setIsSignedUp] = useState(false);

//   const handleGetStarted = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <>
//                 <Header onGetStarted={handleGetStarted} />
//                 <Features />
//                 <Testimonials />
//                 <Footer />
//                 {isModalOpen && (
//                   <AuthModal closeModal={closeModal} setIsSignedUp={setIsSignedUp} />
//                 )}
//               </>
//             }
//           />
//           <Route
//             path="/userinfo"
//             element={isSignedUp ? <UserInfoForm /> : <Navigate to="/" />}
//           />
//           <Route
//             path="/queries"
//             element={isSignedUp ? <QueriesPage /> : <Navigate to="/" />}
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// // export default App;
// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import './App.css';
// import Header from './components/Header';
// import Features from './components/Features';
// import Testimonials from './components/Testimonials';
// import Footer from './components/Footer';
// import AuthModal from './components/AuthModal';
// import UserInfoForm from './components/UserInfoForm';
// import QueriesPage from './components/QueriesPage';

// const App = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isSignedUp, setIsSignedUp] = useState(false);
//   const [bgColor, setBgColor] = useState("#23446e"); // Initial color

//   const handleGetStarted = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
//       const scrollRatio = Math.min(scrollTop / scrollHeight, 1); // Ensure between 0 and 1

//       // Define start and end colors in RGB
//       const startColor = [35, 68, 110]; // #23446e (dark blue)
//       const endColor = [207, 227, 249]; // #cfe3f9 (light blue)

//       // Calculate interpolated color
//       const newColor = startColor.map((start, i) =>
//         Math.round(start + (endColor[i] - start) * scrollRatio)
//       );

//       setBgColor(`rgb(${newColor[0]}, ${newColor[1]}, ${newColor[2]})`);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <Router>
//       <div
//         className="App"
//         style={{
//           backgroundColor: bgColor,
//           transition: "background 0.3s ease-in-out",
//           minHeight: "100vh",
//         }}
//       >
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <>
//                 <Header onGetStarted={handleGetStarted} />
//                 <Features />
//                 <Testimonials />
//                 <Footer />
//                 {isModalOpen && (
//                   <AuthModal closeModal={closeModal} setIsSignedUp={setIsSignedUp} />
//                 )}
//               </>
//             }
//           />
//           <Route
//             path="/userinfo"
//             element={isSignedUp ? <UserInfoForm /> : <Navigate to="/" />}
//           />
//           <Route
//             path="/queries"
//             element={isSignedUp ? <QueriesPage /> : <Navigate to="/" />}
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;

// export default App;
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import UserInfoForm from './components/UserInfoForm';
import QueriesPage from './components/QueriesPage';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignedUp, setIsSignedUp] = useState(false);

  const handleGetStarted = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header onGetStarted={handleGetStarted} />
                <Features />
                <Testimonials />
                <Footer />
                {isModalOpen && (
                  <AuthModal closeModal={closeModal} setIsSignedUp={setIsSignedUp} />
                )}
              </>
            }
          />
          <Route
            path="/userinfo"
            element={isSignedUp ? <UserInfoForm /> : <Navigate to="/" />}
          />
          <Route
            path="/queries"
            element={isSignedUp ? <QueriesPage /> : <Navigate to="/" />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
