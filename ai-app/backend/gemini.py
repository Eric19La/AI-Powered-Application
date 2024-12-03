from dotenv import load_dotenv
from flask import Flask, jsonify, request
import os
import google.generativeai as gemini

# Load the environment variables from the .env file
load_dotenv()

# Initialize the Flask application
app = Flask(__name__)

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

# Starts the flask server on PORT 5000
if __name__ == '__main__':
  app.run(port=5000)