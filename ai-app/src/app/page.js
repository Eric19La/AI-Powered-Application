'use client';

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col h-full bg-gray-200 px-16 w-screen pb-10">

      {/* Main Section */}
      <div className="flex w-full bg-gray-300 p-6 rounded-lg items-center shadow-2xl flex-row justify-between mt-28">
        {/* Left Section */}
        <div className="w-1/2 mb-0 ml-6">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Master Any Skill with
            <br />
            AI-Powered Guidance
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our app uses smart AI technology to create personalized learning paths and provide hands-on support for mastering any skill—whether you're coding in Python or baking your first loaf of bread.
          </p>
          <Link href="/study" className="bg-gray-800 text-gray-300 rounded-full px-8 py-1.5 font-bold italic font-serif mt-10 ml-72 inline-block shadow-lg hover:opacity-80 active:opacity-50">
            Begin Now
          </Link>
        </div>

        {/* Right Section */}
        <div className="w-1/2 flex justify-center">
          <Image
            src="/Study Icon.jpg"
            alt="App Preview"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* About Section */}
      <div className="flex flex-row mt-40 bg-gray-300 p-10 rounded-lg shadow-xl">

        {/* Left Section */}
        <div className="w-1/2 mr-4 border-l-2 border-gray-900 rounded-lg">
          <h2 className="px-6 text-3xl font-bold text-gray-800 mb-4">
            Prompt Engineering Techniques
          </h2>
          <p className="px-6 text-lg text-gray-600 leading-relaxed">
            <span className="font-bold">
              Prompt: 
            </span>
            <br /> 
            "Create a personalized study plan for learning <span className="font-semibold">[The Topic of Your Choice]</span>." 
            <br /> 
            "The plan should take <span className="font-semibold">[The Time Your Going to Spend Learning this Topic]</span> hours to complete and be suitable for a <span className="font-semibold">[The Knowledge Level Of the Learner]</span>."
            <br />
            <br />
            "Divide the time into structured sessions and include actionable tasks for each sesion."
            <br />
            "Ensure the complexity and content are tailored to match the specified difficulty and time."
          </p>
          <br />

          <h3 className="px-6 text-lg text-gray-600 leading-relaxed">
            <span className="font-bold">Techniques Used:</span>
            <br /> 
            <li className="pl-6 font-semibold">Role Assignment</li>
            <span className="pl-16 flex">While not directly assigning a "role," it implicitly positions the AI as a study planner or guide by using clear action-based language.</span>
            <br />
            <li className="pl-6 font-semibold">Explicit and Clear Instructions</li>
            <span className="pl-16 flex">The prompt specifies exactly what the AI needs to do: create a personalized study plan.</span>
            <br />
            <li className="pl-6 font-semibold">Parameterization</li>
            <span className="pl-16 flex">Dynamic parameters like topic, duration, and difficulty allow customization of the response based on user inputs, making it adaptable to different contexts.<br/>Example:<br />[Topic] specifies the subject. <br /> [Duration] and [Difficulty] refines the scope and complexity.</span> 
            <br />
            <li className="pl-6 font-semibold">Structured Instructions</li>
            <span className="pl-16 flex">The instructions are divided into smaller actionable points:<br/> Define the total time for the study plan. <br/> Structure sessions with actionable tasks. <br /> Tailor complexity to match difficulty.
            </span>
            <br />
            <li className="pl-6 font-semibold">Focus on Tailored Output</li>
            <span className="pl-16 flex">Phrases like "tailored to match the specified difficulty and time" explicitly ask the model to consider the user's context and provide a customized response.</span>
            <br />
          </h3>
        </div>

        {/* Horizontal Line */}
        <div className="border-r-2 border-gray-900"></div>

        {/* Right Section */}
        <div className="w-1/2 ml-12 border-r-2 border-gray-900 rounded-lg">
          <h2 className="px-6 text-3xl font-bold text-gray-800 mb-4">
            Identifying the Unmet Need
          </h2>
          <p className="px-6 text-lg text-gray-600 leading-relaxed">
            <span className="font-semibold">Problem: </span> Many learners struggle to find resources that suit their specific learning pace and preferences. Additionally, the fragmentation of resources across platforms makes learning inefficient and discouraging.
          </p>
          <br />
          <p className="px-6 text-lg text-gray-600 leading-relaxed">
            <span className="font-semibold">Unmet Need: </span> A single platform that provides personalized, step-by-step guidance for a variety of skills, making learning more accessible, engaging, and efficient.
          </p>
          <br />
          <p className="px-6 text-lg text-gray-600 leading-relaxed">
            Our app bridges the gap between scattered learning resources and personalized education by offering an AI-driven platform tailored to individual goals. Whether you're a beginner learning to code, mastering new hobbies like baking, or preparing for exams, we provide step-by-step guidance, interactive tools, and actionable feedback to make learning effective, engaging, and accessible for everyone.
          </p>
          <br />
          <br />
          <br />

          <h2 className="px-6 text-3xl font-bold text-gray-800 mb-4">
            Design
          </h2>
          <p className="px-6 text-lg text-gray-600 leading-relaxed">
            The core features of our application are designed to cater to diverse learning needs and provide a seamless, interactive learning experience.
          </p>
          <br />
          <h3 className="px-6 text-lg text-gray-600 leading-relaxed">
            <li className="pl-6 font-semibold">Personalized Study Plans</li>
            <span className="pl-16 flex">Users input their learning goals, skill levels, and available time. The app generates tailored, step-by-step learning paths for technical skills like Python programming or practical hobbies like baking.</span>
            <br />
            <li className="pl-6 font-semibold">Interactive Learning Tools</li>
            <span className="pl-16 flex">The app provides hands-on support with tutorials, exercises, and guided instructions. For example, it helps users debug Python code or follow a bread recipe step-by-step.</span>
            <br />
            <li className="pl-6 font-semibold">Resource Recommendations</li>
            <span className="pl-16 flex">Based on user progress and interests, the app dynamically suggests additional materials, such as advanced Python modules, related programming topics, or variations in recipes.</span>
            <br />
          </h3>
          <br />
        </div>
      </div>

    </div>
  );
}
