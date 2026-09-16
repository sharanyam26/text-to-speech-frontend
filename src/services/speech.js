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
    console.error("Speech synthesis error:", event.error)
    onError(event)
  }

  // Chrome has a known bug where speak() called right after cancel()
  // can silently fail. A tiny delay when something was already speaking
  // avoids the race condition.
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