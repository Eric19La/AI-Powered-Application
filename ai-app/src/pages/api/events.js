const BASE_URL = "http://localhost:5000";

// Fetch all events
export const fetchEvents = async () => {
  // Fetch all events from the API
  try {
    const response = await fetch(`${BASE_URL}/api/events`);
    if (!response.ok) throw new Error('Failed to fetch events');
    // Return the JSON response
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

// Add a new event
export const addEvent = async (event) => {
  // Send a POST request to the API to add a new event
  const response = await fetch(`${BASE_URL}/api/add-event`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(event),
  });

  if (!response.ok) throw new Error('Failed to add event');
  return await response.json();
};



