import google.generativeai as gemini

# Set up your API key
gemini.configure(api_key="AIzaSyBmi4leLxXtzs_qrydJaW6Qvu80UyQnSAI")

model = gemini.GenerativeModel("gemini-1.5-flash")
response = model.generate_content("Write a story about a magic backpack.")
#print(response.text)
