from dotenv import load_dotenv
from flask import Flask, jsonify, request
import os
import google.generativeai as gemini
from flask_cors import CORS

# Load the environment variables from the .env file
load_dotenv()

# Initialize the Flask application
app = Flask(__name__)

CORS(app)  # Enable CORS for the Flask app

# Set up your API key
gemini.configure(api_key=os.getenv("GEMINI_API_KEY"))

# Defines a route at /generate that only accepts POST requests
@app.route('/generate', methods=['POST'])
def generate(): 
  # Retrieves the JSON data sent in the POST request
  data = request.json

  # Retrieves the prompt from the JSON data sent in the POST request, if no prompt is provided it defaults to "Generate a study-guide."
  topic = data.get('prompt', 'Generate a study guide.')
  duration = data.get('duration', 1)
  difficulty = data.get('difficulty', 'beginner')

  # Construct the detailed prompt
  prompt = (
    f"Create a personalized study plan for learning {topic}. "
    f"The plan should take {duration} hours to complete and be suitable for a {difficulty} learner. "
    f"Divide the time into structured sessions and include actionable tasks for each session. "
    f"Ensure the complexity and content are tailored to match the specified difficulty and time."
  )

  # print(f"Final Prompt Sent to Model: {prompt}")  # Debugging log

  try: 
    # Creates an instance of the gemini model
    model = gemini.GenerativeModel("gemini-1.5-flash")

    # Calls the function to generate content
    response = model.generate_content(prompt)
  
    # Returns the generated content as a JSON response
    return jsonify({ 'response_text' : response.text}), 200
  except Exception as e:
    return jsonify({ 'error' : str(e) }), 500
  
  
# Store scheduled events (in memory for now)
events = []  # This should ideally be stored in a database for persistence.

# Route to fetch events
@app.route('/api/events', methods=['GET'])
def get_events():
  return jsonify(events)

# Route to add an event
@app.route('/api/add-event', methods=['POST'])
def add_event():
  # Try to add the event to the list
  try:
    event = request.json  # Get the event data from the request
    # print("Received event:", event)  # Debug log

    # Validate input
    if 'title' not in event or 'date' not in event:
      return jsonify({"error": "Invalid event data"}), 400

    events.append(event)  # Append event to the in-memory list
    return jsonify({"message": "Event added successfully"}), 201
  except Exception as e:
    print("Error adding event:", str(e))  # Debug log
    return jsonify({"error": str(e)}), 500


# Starts the flask server on PORT 5000
if __name__ == '__main__':
  app.run(port=5000)