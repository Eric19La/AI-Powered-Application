'use client';
import { useState } from 'react';

export default function Home() {
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
        <h1>AI Content Generator</h1>
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
