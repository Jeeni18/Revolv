// import React from "react";

// function ResultDisplay({ result }) {
//   return (
//     <div>
//       <h3>Recommended Destinations:</h3>
//       <ul>
//         {result.destinations.map((dest, index) => (
//           <li key={index}>{dest}</li>
//         ))}
//       </ul>
//       <p>{result.message}</p>
//     </div>
//   );
// }

// export default ResultDisplay;

// ResultDisplay.js
// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import './ResultDisplay.css';

// const ResultDisplay = () => {
//     const location = useLocation();
//     const navigate = useNavigate();
//     const { prediction, businessName } = location.state || { prediction: [], businessName: '' };

//     const handleBack = () => {
//         navigate('/');
//     };

//     return (
//         <div className="result-container">
//             <h1>Recommended Tools for {businessName}</h1>
//             <div className="prediction-results">
//                 {prediction.length > 0 ? (
//                     <>
//                         <h2>Based on your business profile, we recommend:</h2>
//                         <ul className="recommendations-list">
//                             {prediction.map((tool, index) => (
//                                 <li key={index} className="recommendation-item">
//                                     {tool}
//                                 </li>
//                             ))}
//                         </ul>
//                     </>
//                 ) : (
//                     <p>No recommendations available. Please try again.</p>
//                 )}
//             </div>
//             <button onClick={handleBack} className="back-button">
//                 Back to Questionnaire
//             </button>
//         </div>
//     );
// };

// export default ResultDisplay;


// // ResultDisplay.js
// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import './ResultDisplay.css';

// const ResultDisplay = () => {
//     const location = useLocation();
//     const navigate = useNavigate();
//     const { prediction, businessName } = location.state || { prediction: [], businessName: '' };

//     const handleBack = () => {
//         navigate('/queries');
//     };

//     return (
//         <div className="result-container">
//             <div className="result-content">
//                 <h1>Recommended Tools</h1>
//                 <div className="business-info">
//                     <h2>for {businessName}</h2>
//                 </div>

//                 <div className="recommendations-section">
//                     {prediction && prediction.length > 0 ? (
//                         <>
//                             <div className="recommendation-header">
//                                 <h3>Based on your business profile, we recommend:</h3>
//                             </div>
//                             <div className="recommendations-grid">
//                                 {prediction.map((tool, index) => (
//                                     <div key={index} className="recommendation-card">
//                                         <div className="tool-name">{tool}</div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </>
//                     ) : (
//                         <div className="no-recommendations">
//                             <p>No recommendations available. Please try again.</p>
//                         </div>
//                     )}
//                 </div>

//                 <button onClick={handleBack} className="back-button">
//                     Back to Questionnaire
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default ResultDisplay;


// // ResultDisplay.js
// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import './ResultDisplay.css';

// const ResultDisplay = () => {
//     const location = useLocation();
//     const navigate = useNavigate();
//     const { prediction, businessName } = location.state || { prediction: [], businessName: '' };

//     const handleBack = () => {
//         navigate('/queries');
//     };

//     return (
//         <div className="result-container">
//             <div className="result-content">
//                 <h1>Recommended Tools</h1>
//                 <div className="business-info">
//                     <h2>for {businessName}</h2>
//                 </div>

//                 <div className="recommendations-section">
//                     {prediction && prediction.length > 0 ? (
//                         <>
//                             <div className="recommendation-header">
//                                 <h3>Based on your business profile, we recommend:</h3>
//                             </div>
//                             <div className="recommendations-grid">
//                                 {prediction.map((tool, index) => (
//                                     <div key={index} className="recommendation-card">
//                                         <div className="tool-name">{tool}</div>
//                                         <div className="implementation-options">
//                                             <div className="option-box ai">
//                                                 <h4>With AI</h4>
//                                                 <button className="select-button">Select</button>
//                                             </div>
//                                             <div className="option-box human">
//                                                 <h4>With Human Help</h4>
//                                                 <button className="select-button">Select</button>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </>
//                     ) : (
//                         <div className="no-recommendations">
//                             <p>No recommendations available. Please try again.</p>
//                         </div>
//                     )}
//                 </div>

//                 <button onClick={handleBack} className="back-button">
//                     Back to Questionnaire
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default ResultDisplay;


import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ResultDisplay.css';

const ResultDisplay = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { prediction, businessName } = location.state || { prediction: [], businessName: '' };

    const handleSelection = (tool, method) => {
        const route = method === 'AI' ? '/with-ai' : '/with-human';
        navigate(route, { 
            state: { 
                tool: tool, 
                businessName: businessName 
            } 
        });
    };

    return (
        <div className="result-container">
            <div className="result-content">
                <h1>Recommended Tools</h1>
                <div className="business-info">
                    <h2>for {businessName}</h2>
                </div>

                <div className="recommendations-section">
                    {prediction && prediction.length > 0 ? (
                        <>
                            <div className="recommendation-header">
                                <h3>Based on your business profile, we recommend:</h3>
                            </div>
                            <div className="recommendations-grid">
                                {prediction.map((tool, index) => (
                                    <div key={index} className="recommendation-card">
                                        <div className="tool-name">Generate {tool}</div>
                                        <div className="implementation-options">
                                            <div className="option-box ai">
                                                <h4>With AI</h4>
                                                <button 
                                                    className="select-button"
                                                    onClick={() => handleSelection(`Generate ${tool}`, 'AI')}
                                                >
                                                    Select AI
                                                </button>
                                            </div>
                                            <div className="option-box human">
                                                <h4>With Human Help</h4>
                                                <button 
                                                    className="select-button"
                                                    onClick={() => handleSelection(`Generate ${tool}`, 'Human')}
                                                >
                                                    Select Human
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    ) : (
                        <div className="no-recommendations">
                            <p>No recommendations available. Please try again.</p>
                        </div>
                    )}
                </div>

                <button onClick={() => navigate('/queries')} className="back-button">
                    Back to Questionnaire
                </button>
            </div>
        </div>
    );
};

export default ResultDisplay;