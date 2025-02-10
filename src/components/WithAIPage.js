// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// const WithAIPage = () => {
//     const location = useLocation();
//     const navigate = useNavigate();
//     const { tool, businessName } = location.state || {};

//     const handleBack = () => {
//         navigate('/results');
//     };

//     return (
//         <div className="ai-implementation-container">
//             <div className="welcome-message">
//                 <h1>Welcome to AI-Powered {tool} Implementation</h1>
//                 <h2>For {businessName}</h2>
//             </div>
//             <div className="implementation-content">
//                 <p>We'll guide you through implementing {tool} using AI-assisted tools and strategies.</p>
//                 <button onClick={handleBack} className="back-button">
//                     Back to Recommendations
//                 </button>
//             </div>
//         </div>
//     );
// };

// // export default WithAIPage;
// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import './WithAIPage.css';

// const WithAIPage = () => {
//     const location = useLocation();
//     const navigate = useNavigate();
//     const { tool, businessName } = location.state || {};
//     const [selectedOption, setSelectedOption] = useState(null);

//     const aiOptions = [
//         'Automated Setup',
//         'Guided Implementation',
//         'Custom AI Configuration',
//         'AI-Driven Strategy'
//     ];

//     const handleOptionSelect = (option) => {
//         setSelectedOption(option);
//     };

//     const handleProceed = () => {
//         if (selectedOption) {
//             navigate('/ai-implementation-details', {
//                 state: { 
//                     tool, 
//                     businessName, 
//                     selectedOption 
//                 }
//             });
//         }
//     };

//     const handleBack = () => {
//         navigate('/results');
//     };

//     return (
//         <div className="ai-implementation-container">
//             <div className="welcome-message">
//                 <h1>AI-Powered {tool} Implementation</h1>
//                 <h2>for {businessName}</h2>
//             </div>

//             <div className="implementation-options">
//                 <h3>Select Your AI Implementation Approach:</h3>
//                 <div className="options-grid">
//                     {aiOptions.map((option, index) => (
//                         <div 
//                             key={index} 
//                             className={`option-card ${selectedOption === option ? 'selected' : ''}`}
//                             onClick={() => handleOptionSelect(option)}
//                         >
//                             <h4>{option}</h4>
//                             <p>Description of {option} approach</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             <div className="action-buttons">
//                 <button 
//                     onClick={handleProceed} 
//                     disabled={!selectedOption}
//                     className="proceed-button"
//                 >
//                     Proceed with {selectedOption || 'Selection'}
//                 </button>
//                 <button onClick={handleBack} className="back-button">
//                     Back to Recommendations
//                 </button>
//             </div>
//         </div>
//     );
// };

// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import './WithAIPage.css';

// const WithAIPage = () => {
//     const location = useLocation();
//     const navigate = useNavigate();
//     const { tool, businessName } = location.state || {};
//     const [selectedTools, setSelectedTools] = useState([]);

//     const toolList = typeof tool === 'string' ? tool.split(',').map(t => t.trim()) : [tool];

//     const handleToolSelect = (selectedTool) => {
//         setSelectedTools(prev => 
//             prev.includes(selectedTool) 
//                 ? prev.filter(t => t !== selectedTool)
//                 : [...prev, selectedTool]
//         );
//     };

//     const handleQRGeneration = () => {
//         if (selectedTools.length > 0) {
//             navigate('/qr-generation', {
//                 state: { 
//                     tools: selectedTools, 
//                     businessName 
//                 }
//             });
//         }
//     };

//     const handleBack = () => {
//         navigate('/results');
//     };

//     return (
//         <div className="ai-implementation-container">
//             <div className="welcome-message">
//                 <h1>AI-Powered Tool Implementation</h1>
//                 <h2>for {businessName}</h2>
//             </div>

//             <div className="implementation-options">
//                 <h3>Select Tools for AI Implementation:</h3>
//                 <div className="options-grid">
//                     {toolList.map((toolItem, index) => (
//                         <div 
//                             key={index}
//                             className={`option-card ${selectedTools.includes(toolItem) ? 'selected' : ''}`}
//                             onClick={() => handleToolSelect(toolItem)}
//                         >
//                             <h4>{toolItem}</h4>
//                             <p>Implement {toolItem} using AI-driven approach</p>
//                             <button 
//                                 className="generate-qr-button"
//                                 onClick={(e) => {
//                                     e.stopPropagation();
//                                     handleQRGeneration();
//                                 }}
//                             >
//                                 Generate 
//                             </button>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             <div className="action-buttons">
//                 <button onClick={handleBack} className="back-button">
//                     Back to Recommendations
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default WithAIPage;

import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './WithAIPage.css';

const WithAIPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { tool, businessName } = location.state || {};
    const [selectedTools, setSelectedTools] = useState([]);

    const toolList = typeof tool === 'string' ? tool.split(',').map(t => t.trim()) : [tool];

    const handleToolSelect = (selectedTool) => {
        setSelectedTools(prev => 
            prev.includes(selectedTool) 
                ? prev.filter(t => t !== selectedTool)
                : [...prev, selectedTool]
        );
    };

    const handleQRGeneration = (selectedTool) => {
        navigate('/qr-generation', {
            state: { 
                tools: [selectedTool], // Pass the selected tool instead of all selected tools
                businessName 
            }
        });
    };

    const handleBack = () => {
        navigate('/results');
    };

    return (
        <div className="ai-implementation-container">
            <div className="welcome-message">
                <h1>AI-Powered Tool Implementation</h1>
                <h2>for {businessName}</h2>
            </div>

            <div className="implementation-options">
                <h3>Select Tools for AI Implementation:</h3>
                <div className="options-grid">
                    {toolList.map((toolItem, index) => (
                        <div 
                            key={index}
                            className={`option-card ${selectedTools.includes(toolItem) ? 'selected' : ''}`}
                            onClick={() => handleToolSelect(toolItem)}
                        >
                            <h4>{toolItem}</h4>
                            <p>Implement {toolItem} using an AI-driven approach</p>
                            <button 
                                className="generate-qr-button"
                                onClick={(e) => {
                                    e.stopPropagation(); // Prevents parent div click
                                    handleQRGeneration(toolItem); // Pass individual tool
                                }}
                            >
                                Generate 
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <div className="action-buttons">
                <button onClick={handleBack} className="back-button">
                    Back to Recommendations
                </button>
            </div>
        </div>
    );
};

export default WithAIPage;
