export default async function handler(req, res) {
  // Checks if the request method is POST
  if (req.method === 'POST') {
    //console.log("Received prompt from frontend:", req.body.prompt);
    
    try {
      // Makes a POST request to the Flask server running on Port 5000, this calls forwards the prompt received from the client to the Python backend 
      const response = await fetch('http://localhost:5000/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt: req.body.prompt }),
      });

      // Retrieves the JSON response from the Flask server
      const data = await response.json();

      //console.log("Received response from Python backend:", data);

      // Sends the JSON data back to the frontend
      res.status(200).json(data);
    } catch (error) {
      //console.log("Error fetching content from Python backend:", error);

      res.status(500).json({ error: 'Failed to fetch content from Python backend' });
    }
  } else {
    res.status(405).json({ error: 'Only POST requests are allowed' });
  }
}