export function loadVoices() {
  return new Promise((resolve) => {
    let voices = window.speechSynthesis.getVoices()
    if (voices.length > 0) {
      resolve(voices)
      return
    }
    window.speechSynthesis.onvoiceschanged = () => {
      voices = window.speechSynthesis.getVoices()
      resolve(voices)
    }
  })
}

export function getLanguages(voices) {
  const uniqueLangs = [...new Set(voices.map((v) => v.lang))]
  return uniqueLangs.sort()
}

export function getVoicesForLanguage(voices, lang) {
  return voices.filter((v) => v.lang === lang)
}