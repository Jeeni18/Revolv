import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ResultsPage.css';

const ResultsPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const results = location.state?.data;

    // If no results are found, redirect back to query page
    if (!results) {
        navigate('/query');
        return null;
    }

    return (
        <div className="results-container">
            <h1>Analysis Results</h1>
            
            <div className="results-content">
                {/* Display business profile */}
                <section className="result-section">
                    <h2>Business Profile</h2>
                    <div className="profile-details">
                        <p><strong>Business Name:</strong> {results.businessName}</p>
                        <p><strong>Industry:</strong> {results.industry.join(', ')}</p>
                        <p><strong>Business Type:</strong> {results.businessType.join(', ')}</p>
                        <p><strong>Business Size:</strong> {results.businessSize}</p>
                    </div>
                </section>

                {/* Display recommendations or analysis */}
                <section className="result-section">
                    <h2>Analysis & Recommendations</h2>
                    <div className="analysis-content">
                        {/* Replace this with actual analysis from your backend */}
                        {results.recommendations?.map((recommendation, index) => (
                            <div key={index} className="recommendation-item">
                                <h3>{recommendation.title}</h3>
                                <p>{recommendation.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Tools and Technology Section */}
                <section className="result-section">
                    <h2>Digital Presence Analysis</h2>
                    <div className="digital-analysis">
                        <p><strong>Website Status:</strong> {results.hasWebsite}</p>
                        <p><strong>Online Sales:</strong> {results.sellsOnline}</p>
                        <p><strong>Current Tools:</strong> {results.tools.join(', ')}</p>
                    </div>
                </section>

                {/* Action buttons */}
                <div className="action-buttons">
                    <button 
                        onClick={() => navigate('/query')} 
                        className="back-button"
                    >
                        Back to Questionnaire
                    </button>
                    <button 
                        onClick={() => window.print()} 
                        className="print-button"
                    >
                        Print Results
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ResultsPage;