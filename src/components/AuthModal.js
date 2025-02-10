// import React, { useState } from 'react';
// import './AuthModal.css';

// const AuthModal = ({ closeModal, setIsSignedUp }) => {
//   const [isSignUp, setIsSignUp] = useState(false);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Dummy form submission for demo
//     setIsSignedUp(true);
//     closeModal();
//   };

//   const handleClose = () => {
//     // Redirecting to the home page after closing the modal
//     window.location.href = "/"; // You can use the appropriate route if you are using React Router
//   };

//   return (
//     <div className="auth-modal">
//       <div className="auth-box">
//         <button className="close-btn" onClick={handleClose}>×</button>
//         <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>
        
//         <form onSubmit={handleSubmit}>
//           {isSignUp && (
//             <>
//               <input type="text" placeholder="First Name" required />
//               <input type="text" placeholder="Last Name" required />
//             </>
//           )}
//           <input type="email" placeholder="Email" required />
//           <input type="password" placeholder="Password" required />
//           {isSignUp && <input type="password" placeholder="Confirm Password" required />}
          
//           <button type="submit">{isSignUp ? 'Sign Up' : 'Login'}</button>
//         </form>

//         <p onClick={() => setIsSignUp(!isSignUp)}>
//           {isSignUp ? 'Already have an account? Login' : 'Don\'t have an account? Sign Up'}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default AuthModal;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './AuthModal.css';

// const AuthModal = ({ closeModal, setIsSignedUp }) => {
//   const [isSignUp, setIsSignUp] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setIsSignedUp(true);
//     closeModal();
//     navigate("/queries");
//   };

//   return (
//     <div className="auth-modal">
//       <div className="auth-box">
//         <button className="close-btn" onClick={closeModal}>×</button>
//         <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>
        
//         <form onSubmit={handleSubmit}>
//           {isSignUp && (
//             <>
//               <input type="text" placeholder="First Name" required />
//               <input type="text" placeholder="Last Name" required />
//             </>
//           )}
//           <input type="email" placeholder="Email" required />
//           <input type="password" placeholder="Password" required />
//           {isSignUp && <input type="password" placeholder="Confirm Password" required />}
          
//           <button type="submit">{isSignUp ? 'Sign Up' : 'Login'}</button>
//         </form>

//         <p onClick={() => setIsSignUp(!isSignUp)}>
//           {isSignUp ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default AuthModal;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './AuthModal.css';

// const AuthModal = ({ closeModal, setIsSignedUp }) => {
//   const [isSignUp, setIsSignUp] = useState(false);
//   const [userType, setUserType] = useState(null); // Track selected user type
//   const navigate = useNavigate();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setIsSignedUp(true);
//     closeModal();
//     navigate("/queries");
//   };

//   return (
//     <div className="auth-modal">
//       <div className="auth-box">
//         <button className="close-btn" onClick={closeModal}>×</button>

//         {/* User Type Selection */}
//         {!userType ? (
//           <>
//             <h2>Select Your Role</h2>
//             <button className="user-type-btn" onClick={() => setUserType('business')}>
//               Login as Business Owner
//             </button>
//             <button className="user-type-btn" onClick={() => setUserType('jobSeeker')}>
//               Login as Job Seeker
//             </button>
//           </>
//         ) : (
//           <>
//             <h2>{isSignUp ? 'Sign Up' : 'Login'} as {userType === 'business' ? 'Business Owner' : 'Job Seeker'}</h2>
            
//             <form onSubmit={handleSubmit}>
//               {isSignUp && (
//                 <>
//                   <input type="text" placeholder="First Name" required />
//                   <input type="text" placeholder="Last Name" required />
//                 </>
//               )}
//               <input type="email" placeholder="Email" required />
//               <input type="password" placeholder="Password" required />
//               {isSignUp && <input type="password" placeholder="Confirm Password" required />}
              
//               <button type="submit">{isSignUp ? 'Sign Up' : 'Login'}</button>
//             </form>

//             <p onClick={() => setIsSignUp(!isSignUp)}>
//               {isSignUp ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
//             </p>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AuthModal;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './AuthModal.css';

// const AuthModal = ({ closeModal, setIsSignedUp }) => {
//   const [isSignUp, setIsSignUp] = useState(false);
//   const [userType, setUserType] = useState('business'); // 'business' or 'seeker'
//   const navigate = useNavigate();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setIsSignedUp(true);
//     closeModal();
    
//     if (userType === 'business') {
//       navigate("/queries"); // Redirect to QueriesPage for business owners
//     } else {
//       navigate("/seeker"); // Redirect to SeekerPage for job seekers
//     }
//   };

//   return (
//     <div className="auth-modal">
//       <div className="auth-box">
//         <button className="close-btn" onClick={closeModal}>×</button>
//         <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>

//         {/* User Type Selection */}
//         <div className="user-type-selection">
//           <button 
//             className={userType === 'business' ? 'active' : ''} 
//             onClick={() => setUserType('business')}
//           >
//             Business Owner
//           </button>
//           <button 
//             className={userType === 'seeker' ? 'active' : ''} 
//             onClick={() => setUserType('seeker')}
//           >
//             Job Seeker
//           </button>
//         </div>

//         <form onSubmit={handleSubmit}>
//           {isSignUp && (
//             <>
//               <input type="text" placeholder="First Name" required />
//               <input type="text" placeholder="Last Name" required />
//             </>
//           )}
//           <input type="email" placeholder="Email" required />
//           <input type="password" placeholder="Password" required />
//           {isSignUp && <input type="password" placeholder="Confirm Password" required />}

//           <button type="submit">{isSignUp ? 'Sign Up' : 'Login'}</button>
//         </form>

//         <p onClick={() => setIsSignUp(!isSignUp)}>
//           {isSignUp ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default AuthModal;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthModal.css';

const AuthModal = ({ closeModal, setIsSignedUp, setUserType }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [selectedType, setSelectedType] = useState('business'); // Track user selection
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSignedUp(true);
    setUserType(selectedType); // Set user type in App.js
    closeModal();
    
    if (selectedType === 'business') {
      navigate("/queries");
    } else {
      navigate("/seeker");
    }
  };

  return (
    <div className="auth-modal">
      <div className="auth-box">
        <button className="close-btn" onClick={closeModal}>×</button>
        <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>

        {/* User Type Selection */}
        <div className="user-type-selection">
          <button 
            className={selectedType === 'business' ? 'active' : ''} 
            onClick={() => setSelectedType('business')}
          >
            Business Owner
          </button>
          <button 
            className={selectedType === 'seeker' ? 'active' : ''} 
            onClick={() => setSelectedType('seeker')}
          >
            Job Seeker
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {isSignUp && (
            <>
              <input type="text" placeholder="First Name" required />
              <input type="text" placeholder="Last Name" required />
            </>
          )}
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          {isSignUp && <input type="password" placeholder="Confirm Password" required />}

          <button type="submit">{isSignUp ? 'Sign Up' : 'Login'}</button>
        </form>

        <p onClick={() => setIsSignUp(!isSignUp)}>
          {isSignUp ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
        </p>
      </div>
    </div>
  );
};

export default AuthModal;

