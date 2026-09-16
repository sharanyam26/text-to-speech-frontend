export function speakText(text, voiceObject, volume, onStart, onEnd, onError) {
  const wasSpeaking = window.speechSynthesis.speaking || window.speechSynthesis.pending

  window.speechSynthesis.cancel()

  const utterance = new SpeechSynthesisUtterance(text)
  utterance.voice = voiceObject
  utterance.lang = voiceObject.lang
  utterance.volume = volume

  utterance.onstart = onStart
  utterance.onend = onEnd
  utterance.onerror = (event) => {
    // "interrupted" and "canceled" happen when we deliberately stop speech
    // (Stop button, or starting new speech while old speech was playing).
    // These are expected, not real failures - treat them like a normal end.
    if (event.error === "interrupted" || event.error === "canceled") {
      onEnd()
      return
    }
    console.error("Speech synthesis error:", event.error)
    onError(event)
  }

  const delay = wasSpeaking ? 100 : 0
  setTimeout(() => {
    window.speechSynthesis.speak(utterance)
  }, delay)

  return utterance
}

export function pauseSpeech() {
  window.speechSynthesis.pause()
}

export function resumeSpeech() {
  window.speechSynthesis.resume()
}

export function stopSpeech() {
  window.speechSynthesis.cancel()
}

export function isSpeaking() {
  return window.speechSynthesis.speaking
}