import { useState, useEffect } from "react"
import TextInput from "./components/TextInput"
import LanguageSelector from "./components/LanguageSelector"
import VoiceSelector from "./components/VoiceSelector"
import ErrorMessage from "./components/ErrorMessage"
import { loadVoices, getLanguages, getVoicesForLanguage } from "./services/voices"
import { speakText } from "./services/speech"
import { validateTtsRequest } from "./services/api"

function App() {
  const [text, setText] = useState("")
  const [allVoices, setAllVoices] = useState([])
  const [languages, setLanguages] = useState([])
  const [selectedLanguage, setSelectedLanguage] = useState("")
  const [selectedVoice, setSelectedVoice] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [lastGenerated, setLastGenerated] = useState(null)
  
  useEffect(() => {
    loadVoices().then((voices) => {
      setAllVoices(voices)
      const langs = getLanguages(voices)
      setLanguages(langs)
      if (langs.length > 0) setSelectedLanguage(langs[0])
    })
  }, [])

  const voicesForLanguage = getVoicesForLanguage(allVoices, selectedLanguage)

  useEffect(() => {
    if (voicesForLanguage.length > 0) {
      setSelectedVoice(voicesForLanguage[0].name)
    }
  }, [selectedLanguage, allVoices])

  async function handleGenerateSpeech() {
  setErrorMessage("")
  setLastGenerated(null)

  if (text.trim() === "") {
    setErrorMessage("Please enter some text before generating speech.")
    return
  }

  const voiceObject = voicesForLanguage.find((v) => v.name === selectedVoice)
  if (!voiceObject) {
    setErrorMessage("Please select a valid voice.")
    return
  }

  setIsLoading(true)

  try {
    const result = await validateTtsRequest(text, selectedLanguage, selectedVoice)

    speakText(
      text,
      voiceObject,
      () => setIsLoading(true),
      () => setIsLoading(false),
      () => {
        setIsLoading(false)
        setErrorMessage("Speech playback failed. Please try again.")
      }
    )

    setLastGenerated(result.data)
  } catch (error) {
    setIsLoading(false)
    setErrorMessage(error.message || "Network error. Please check your connection.")
  }
}
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

        <button
          onClick={handleGenerateSpeech}
          disabled={isLoading}
          className="w-full bg-blue-600 text-white font-medium py-2 rounded hover:bg-blue-700 disabled:bg-blue-300"
        >
          {isLoading ? "Generating..." : "Generate Speech"}
        </button>
         {lastGenerated && (
  <div className="border-t pt-4">
    <h2 className="text-gray-700 font-medium mb-2">Generated Audio</h2>
    <p className="text-sm text-gray-500">
      Speech generated for {lastGenerated.characterCount} characters in {lastGenerated.language}.
    </p>
    {/* Real <audio> player controls come tomorrow (Day 12) */}
  </div>
)}
        <ErrorMessage message={errorMessage} />
      </div>
    </div>
  )
}

export default App