const BACKEND_URL = "http://localhost:5000"

export async function validateTtsRequest(text, language, voice) {
  const response = await fetch(`${BACKEND_URL}/api/tts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ text, language, voice })
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.error || "Something went wrong.")
  }

  return data
}