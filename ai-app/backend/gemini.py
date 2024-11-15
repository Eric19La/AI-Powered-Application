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
  #print("Received request: ", request.json) 

  # Retrieves the prompt from the JSON data sent in the POST request, if no prompt is provided it defaults to "Write a story about a magic backpack."
  prompt = request.json.get('prompt', 'Write a story aboute a magic backpack.')

  # Creates an instance of the gemini model
  model = gemini.GenerativeModel("gemini-1.5-flash")

  # Calls the function to generate content
  response = model.generate_content(prompt)
  
  #print("Generated reponse: ", response.text)

  # Returns the generated content as a JSON response
  return jsonify(response_text=response.text)

  #print(response.text)

# Starts the flask server on PORT 5000
if __name__ == '__main__':
  app.run(port=5000)