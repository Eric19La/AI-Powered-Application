import { useState } from "react";
import TextAreaAutosize from "react-textarea-autosize";

export default function StudyPage() {
  const [prompt, setPrompt] = useState('');
  const [responseText, setResponseText] = useState('');

  const generateContent = async () => {
    try {
      const res = await fetch('/api/generate', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      setResponseText(data.response_text);
    } catch (error) {
      setResponseText('Error generating content');
    }
  };

  return (
    <div>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="w-96 relative">
          <label className="text-xl font-bold m-2 text-gray-900">
            Get Started
          </label>
          <TextAreaAutosize
            className="appearance-none bg-gray-300 p-3 rounded-lg w-full border-gray-400 border focus:border-gray-200 focus:outline-none" 
            placeholder="Enter your prompt here..."
            maxRows={5}
          />
        </div>
      </div>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your prompt here..."
      />
      <button onClick={generateContent}>Generate Content</button>
      <div>
        <h2>Generated Content:</h2>
        <p>{responseText}</p>
      </div>
    </div>
  );
}