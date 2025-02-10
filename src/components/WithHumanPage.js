// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// const WithHumanPage = () => {
//     const location = useLocation();
//     const navigate = useNavigate();
//     const { tool, businessName } = location.state || {};

//     const handleBack = () => {
//         navigate('/results');
//     };

//     return (
//         <div className="human-implementation-container">
//             <div className="welcome-message">
//                 <h1>Welcome to Human-Assisted {tool} Implementation</h1>
//                 <h2>For {businessName}</h2>
//             </div>
//             <div className="implementation-content">
//                 <p>Our expert team will help you implement {tool} with personalized guidance.</p>
//                 <button onClick={handleBack} className="back-button">
//                     Back to Recommendations
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default WithHumanPage;

import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './WithHumanPage.css';

const WithHumanPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { tool, businessName } = location.state || {};
    const [selectedTools, setSelectedTools] = useState([]);

    // Split tools by comma if it's a comma-separated string
    const toolList = typeof tool === 'string' ? tool.split(',').map(t => t.trim()) : [tool];

    const handleToolSelect = (selectedTool) => {
        setSelectedTools(prev => 
            prev.includes(selectedTool) 
                ? prev.filter(t => t !== selectedTool)
                : [...prev, selectedTool]
        );
    };

    const handleProceed = () => {
        if (selectedTools.length > 0) {
            navigate('/human-implementation-details', {
                state: { 
                    tools: selectedTools, 
                    businessName 
                }
            });
        }
    };

    const handleBack = () => {
        navigate('/results');
    };

    return (
        <div className="human-implementation-container">
            <div className="welcome-message">
                <h1>Human-Assisted Tool Implementation</h1>
                <h2>for {businessName}</h2>
            </div>

            <div className="implementation-options">
                <h3>Select Tools for Human Implementation:</h3>
                <div className="options-grid">
                    {toolList.map((toolItem, index) => (
                        <div 
                            key={index}
                            className={`option-card ${selectedTools.includes(toolItem) ? 'selected' : ''}`}
                            onClick={() => handleToolSelect(toolItem)}
                        >
                            <h4>{toolItem}</h4>
                            <p>Implement {toolItem} with personalized human assistance</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="action-buttons">
                <button 
                    onClick={handleProceed} 
                    disabled={selectedTools.length === 0}
                    className="proceed-button"
                >
                    Proceed with Selected Tools
                </button>
                <button onClick={handleBack} className="back-button">
                    Back to Recommendations
                </button>
            </div>
        </div>
    );
};

export default WithHumanPage;