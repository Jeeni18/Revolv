from flask import Flask, request, jsonify
from flask_cors import CORS
# Import your friend's Python files
from input_handler import process_input  # Replace with actual filename and function
from recommendation_system import get_recommendations  # Replace with actual filename and function

app = Flask(__name__)
CORS(app)  # This allows your React frontend to make requests to this server

@app.route('/api/submit-query', methods=['POST'])
def handle_query():
    try:
        # Get data from frontend
        data = request.json
        
        # Process input using your friend's first Python file
        process_input(data)  # Replace with actual function name
        
        # Get recommendations using your friend's second Python file
        recommendations = get_recommendations(data)  # Replace with actual function name
        
        # Prepare response
        response = {
            **data,  # Include original form data
            'recommendations': recommendations
        }
        
        return jsonify(response), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)