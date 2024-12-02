import Image from "next/image";
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
        <div className="w-6/12 text-center m-10">
          <label className="text-4xl font-bold text-gray-900 font-serif block m-3">
            How can I help you today?
          </label>
          <div className="relative pb-12 flex rounded-lg">
            <TextAreaAutosize
              className="appearance-none bg-gray-300 p-3 rounded-lg w-full border-gray-400 border focus:border-gray-200 focus:outline-none" 
              placeholder="Enter your prompt here..."
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
        </div>
      </div>
      <div>
        <h2>Generated Content:</h2>
        <p>{responseText}</p>
      </div>
    </div>
  );
}