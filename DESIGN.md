# UI Design – Text-to-Speech App (Level 1)

## Wireframe

--------------------------------------------------
TEXT TO SPEECH
--------------------------------------------------
Enter your text:
[ Textarea ]
Characters: 0 / 5000

Language: [ English ▼ ]
Voice: [ English Female ▼ ]

[ Generate Speech ]
--------------------------------------------------
Generated Audio
[ Audio Player ]
[ Download Audio ]
--------------------------------------------------
[ Error Message area ]

## Components

| Component | Responsibility |
|---|---|
| App | Page layout, holds shared state |
| TextInput | Text entry, char/word count, validation |
| LanguageSelector | Language dropdown |
| VoiceSelector | Voice dropdown (filtered by language) |
| GenerateButton | Triggers TTS request, loading state |
| AudioPlayer | Play/pause/seek/volume |
| DownloadButton | Download generated audio file |
| ErrorMessage | Displays validation/API/network errors |

## Styling
- Approach: Tailwind CSS
- Primary color: blue (#2563EB)
- Error color: red (#DC2626)
- Background: light gray (#F9FAFB)
- Text: dark gray (#111827)

## REST API Notes (Day 6)

- HTTP methods used in this project: GET (/api/voices), POST (/api/tts)
- Request = URL + method + headers + body (body only for POST)
- Response = status code + body
- Status codes planned: 200, 400, 401, 404, 500 (see backend spec)
- fetch() used for all API calls from React, with async/await and try/catch
- Practiced with https://jsonplaceholder.typicode.com before connecting to our own backend (Day 7)

## Frontend-Backend Connection Test (Day 7)

- Verified React (port 5173) can successfully fetch data from Express backend (port 5000)
- Required `cors` package on backend to allow cross-origin requests
- Confirmed request/response cycle end-to-end before building real API endpoints (Day 8+)