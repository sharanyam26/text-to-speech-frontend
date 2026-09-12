function VoiceSelector({ voices, selectedVoice, setSelectedVoice }) {
  return (
    <div className="flex-1">
      <label className="block text-gray-700 mb-1">Voice:</label>
      <select
        className="w-full border border-gray-300 rounded p-2"
        value={selectedVoice}
        onChange={(e) => setSelectedVoice(e.target.value)}
      >
        {voices.map((voice) => (
          <option key={voice.name} value={voice.name}>
            {voice.name} ({voice.lang})
          </option>
        ))}
      </select>
    </div>
  )
}

export default VoiceSelector