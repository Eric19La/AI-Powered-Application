import Image from "next/image";
import { useState } from "react";
import TextAreaAutosize from "react-textarea-autosize";
import { addEvent } from "../api/events";
import { useRouter } from "next/router";

export default function StudyPage() {
  const [prompt, setPrompt] = useState(''); // Stores the user's input
  const [responseText, setResponseText] = useState(''); // Stores the generated content
  const [duration, setDuration] = useState(''); // Stores the selected duration
  const [difficulty, setDifficulty] = useState(''); // Stores the selected difficulty
  const [loading, setLoading] = useState(false); // Stores the loading state

  const [date, setDate] = useState(''); // Stores the selected date
  // const [time, setTime] = useState(''); // Stores the selected time
  const router = useRouter();

  // Function to generate content
  const generateContent = async () => {
    try {
      setLoading(true); // Set loading to true to show loading indicator

      // Check if prompt, duration and difficulty are empty
      const payload = { 
        prompt,
        duration,
        difficulty, 
      };

      // Fetch data from the API
      const res = await fetch('/api/generate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
      });

      // Parse the response
      const data = await res.json();
      // Set the response text
      setResponseText(data.response_text || "No Response");
    } catch (error) {
      setResponseText('Error generating content');
    } finally {
      setLoading(false);
    }
  };


  // Function to schedule the study plan
  const scheduleStudyPlan = async () => {
    // If there is no date selected, show an alert
    if (!date) {
      alert("Please select a date before scheduling.");
      return;
    }
  
    // Prepare the payload to send to the backend
    const payload = {
      title: responseText || 'Generated Study Plan',
      date,
      // start: `${date}T${time}:00`, // Combine date and time
    };
  
    // console.log("Payload being sent:", payload); // Debug log
  
    try {
      const result = await addEvent(payload); // Send event to the backend

      // Show an alert based on the result 
      if (!result.error) {
        alert("Study plan scheduled successfully!");
      } else {
        alert("Failed to schedule the study plan: " + result.error);
      }
    } catch (error) {
      alert("An error occurred while scheduling: " + error.message);
    }

    router.push('/schedule'); // Redirect to the calendar page
  };
  

  return (
    <>
      <div className="w-full h-full flex flex-col justify-center items-center my-5 scroll-smooth overflow-x-hidden">
        
        {/* Input Section */}
        <div className="w-6/12 text-center m-10">
          <label className="text-4xl font-bold text-gray-900 font-serif block m-3">
            How can I help you today?
          </label>
          <div className="relative pb-12 flex rounded-lg">
            <TextAreaAutosize
              className="appearance-none bg-gray-300 p-3 rounded-lg w-full border-gray-400 border focus:border-gray-200 focus:outline-none" 
              placeholder="Enter the topic you wish to create a study plan for..."
              maxRows={5}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            <button 
              className="absolute bottom-0 right-2 cursor-pointer rounded-full bg-gray-300 border border-gray-400 active:border-gray-200 active:outline-none active:bg-gray-400 hover:opacity-80 hover:bg-gray-800" 
              // style={{ transform: 'translateY(50%, 50%)' }}
              onClick={generateContent}
              disabled={loading}
            >
              <Image 
                src="/Foward Arrow Icon.svg"
                alt="Arrow Icon"
                width={36}
                height={36}
              />
            </button>
          </div>  

          <div className="w-full items-center flex justify-between">
            {/* Duration selection */}
            <div className="flex-1 mr-2">
              <label className="block text-xl font-bold mb-2 text-gray-900 font-serif">
                Select Duration:
              </label>
              <select
                  className="text-gray-400 appearance-none bg-gray-300 p-3 rounded-lg w-full border-gray-400 border focus:border-gray-200 focus:outline-none focus:text-gray-600"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
              >
                <option value="" disabled>
                    Choose duration
                </option>
                <option value="1">1 hour</option>
                <option value="2">2 hours</option>
                <option value="3">3 hours</option>
                <option value="4">4 hours</option>
                <option value="5">5 hours</option>
                <option value="6">6 hours</option>
                <option value="7">7 hours</option>
                <option value="8">8 hours</option>
              </select>
            </div>

            
            {/* Difficulty selection */}
            <div className="flex-1 ml-2">
              <label className="block text-xl font-bold mb-2 text-gray-900 font-serif">
                Select Difficulty:
              </label>
              <select
                  className="text-gray-400 appearance-none bg-gray-300 p-3 rounded-lg w-full border-gray-400 border focus:border-gray-200 focus:outline-none focus:text-gray-600"
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value)}
              >
                <option value="" disabled>
                  Choose difficulty
                </option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
          </div>

        </div>

        {/* Loading Indicator */}
        {loading && (
          <div className="my-10 flex items-center overflow-hidden bg-gray-300 rounded-lg px-6 py-2 text-2xl font-bold font-serif">
            <svg
              className="animate-spin h-5 w-5 mr-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              ></path>
            </svg>
            Generating Content...
          </div>
        )}

        {/* Output Section */}
        {responseText && (
          <>
            <div className="w-6/12 bg-gray-100 p-4 rounded-lg shadow-lg border border-gray-300 min-h-[100px] max-h[400px] overflow-x-hidden">
              <p className="whitespace-pre-wrap">
                {responseText}
              </p>
            </div>

            {/* Schedule Your Plan */}
            <div className="flex flex-row py-8 justify-between w-6/12">
              <label className="text-center px-20 text-xl text-gray-900 font-serif font-semibold underlin">
                Select Date: 
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="flex rounded-full bg-gray-300 p-3 shadow-md border-0 active:border-gray-400 active:opacity-50 hover:bg-gray-400"
                />
              </label>
              <button 
                onClick={scheduleStudyPlan} 
                disabled={!responseText || !date }
                className="mx-20 rounded-full bg-gray-300 px-10 text-center text-xl font-semibold font-serif shadow-md hover:opacity-80 hover:bg-gray-400 active:opacity-50" 
              >
                Schedule This Plan
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}