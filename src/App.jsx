import { useState, useEffect } from "react"
import TextInput from "./components/TextInput"
import LanguageSelector from "./components/LanguageSelector"
import VoiceSelector from "./components/VoiceSelector"
import { loadVoices, getLanguages, getVoicesForLanguage } from "./services/voices"

function App() {
  const [text, setText] = useState("")
  const [allVoices, setAllVoices] = useState([])
  const [languages, setLanguages] = useState([])
  const [selectedLanguage, setSelectedLanguage] = useState("")
  const [selectedVoice, setSelectedVoice] = useState("")

  // Load voices once, when the app first mounts
  useEffect(() => {
    loadVoices().then((voices) => {
      setAllVoices(voices)
      const langs = getLanguages(voices)
      setLanguages(langs)
      if (langs.length > 0) setSelectedLanguage(langs[0])
    })
  }, [])

  // Whenever the selected language changes, update the voice list
  const voicesForLanguage = getVoicesForLanguage(allVoices, selectedLanguage)

  useEffect(() => {
    if (voicesForLanguage.length > 0) {
      setSelectedVoice(voicesForLanguage[0].name)
    }
  }, [selectedLanguage, allVoices])

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Text to Speech
      </h1>

      <div className="w-full max-w-xl bg-white rounded-lg shadow p-6 space-y-4">
        <TextInput text={text} setText={setText} />

        <div className="flex gap-4">
          <LanguageSelector
            languages={languages}
            selectedLanguage={selectedLanguage}
            setSelectedLanguage={setSelectedLanguage}
          />
          <VoiceSelector
            voices={voicesForLanguage}
            selectedVoice={selectedVoice}
            setSelectedVoice={setSelectedVoice}
          />
        </div>

        <button className="w-full bg-blue-600 text-white font-medium py-2 rounded hover:bg-blue-700">
          Generate Speech
        </button>
      </div>
    </div>
  )
}

export default App