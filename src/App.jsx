import { useState } from "react"
import TextInput from "./components/TextInput"

function App() {
  const [text, setText] = useState("")

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Text to Speech
      </h1>

      <div className="w-full max-w-xl bg-white rounded-lg shadow p-6 space-y-4">
        <TextInput text={text} setText={setText} />

        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-gray-700 mb-1">Language:</label>
            <select className="w-full border border-gray-300 rounded p-2">
              <option>English</option>
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-gray-700 mb-1">Voice:</label>
            <select className="w-full border border-gray-300 rounded p-2">
              <option>English Female</option>
            </select>
          </div>
        </div>

        <button className="w-full bg-blue-600 text-white font-medium py-2 rounded hover:bg-blue-700">
          Generate Speech
        </button>
      </div>
    </div>
  )
}

export default App