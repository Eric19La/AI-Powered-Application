import Image from "next/image";
import { useState } from "react";
import TextAreaAutosize from "react-textarea-autosize";

export default function StudyPage() {
  const [prompt, setPrompt] = useState('');
  const [responseText, setResponseText] = useState('');
  const [duration, setDuration] = useState('');
  const [difficulty, setDifficulty] = useState('');

  const generateContent = async () => {
    try {
      const payload = { 
        prompt,
        duration,
        difficulty, 
      };

      const res = await fetch('/api/generate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
      });

      const data = await res.json();
      setResponseText(data.response_text || "No Response");
    } catch (error) {
      setResponseText('Error generating content');
    }
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

        {/* Output Section */}
        {responseText && (
          <div className="w-6/12 bg-gray-100 p-4 rounded-lg shadow-lg border border-gray-300 min-h-[100px] max-h[400px] overflow-x-hidden">
            <p className="whitespace-pre-wrap">
              {responseText}
            </p>
          </div>
        )}
      </div>
    </>
  );
}