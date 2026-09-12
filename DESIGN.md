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