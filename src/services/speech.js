export function speakText(text, voiceObject, onStart, onEnd, onError) {
  window.speechSynthesis.cancel() // stop any speech already in progress

  const utterance = new SpeechSynthesisUtterance(text)
  utterance.voice = voiceObject
  utterance.lang = voiceObject.lang

  utterance.onstart = onStart
  utterance.onend = onEnd
  utterance.onerror = onError

  window.speechSynthesis.speak(utterance)
}