import { useState } from "react"
import { pauseSpeech, resumeSpeech, stopSpeech } from "../services/speech"

function AudioPlayer({ isSpeakingNow, volume, setVolume }) {
  const [isPaused, setIsPaused] = useState(false)

  function handlePauseResume() {
    if (isPaused) {
      resumeSpeech()
      setIsPaused(false)
    } else {
      pauseSpeech()
      setIsPaused(true)
    }
  }

  function handleStop() {
    stopSpeech()
    setIsPaused(false)
  }

  return (
    <div className="border-t pt-4 space-y-3">
      <h2 className="text-gray-700 font-medium">Generated Audio</h2>

      <div className="flex items-center gap-3">
        <button
          onClick={handlePauseResume}
          disabled={!isSpeakingNow}
          className="px-4 py-1 bg-blue-600 text-white rounded disabled:bg-gray-300"
        >
          {isPaused ? "Resume" : "Pause"}
        </button>

        <button
          onClick={handleStop}
          disabled={!isSpeakingNow}
          className="px-4 py-1 bg-gray-200 text-gray-700 rounded disabled:bg-gray-100 disabled:text-gray-400"
        >
          Stop
        </button>

        <div className="flex items-center gap-2 flex-1">
          <span className="text-sm text-gray-500">🔊</span>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            className="flex-1"
          />
        </div>
      </div>

      <p className="text-xs text-gray-400">
        Note: seeking isn't available for live browser speech (no audio file exists to seek within).
        Adjust volume before clicking Generate — it applies to the next playback.
      </p>
    </div>
  )
}

export default AudioPlayer