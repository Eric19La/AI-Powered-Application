import Calendar from "../../components/Calendar";

// Calendar Page Component
export default function CalendarPage() {
  return (
    <div className="bg-gray-200 py-6 px-16 w-screen flex flex-col h-full">

      {/* Header Section */}
      <div className="w-full text-center mb-12 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Your Personalized Schedule
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Plan and track your study sessions effectively.
        </p>
      </div>

      {/* Calendar Component */}
      <div className="flex w-full bg-gray-100 shadow-2xl rounded-lg p-6">
        <Calendar />
      </div>
    </div>
  );
}
