const MAX_CHARACTERS = 5000

function TextInput({ text, setText }) {
  const characterCount = text.length
  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length
  const isOverLimit = characterCount > MAX_CHARACTERS
  const isEmpty = text.trim() === ""

  return (
    <div>
      <label className="block text-gray-700 mb-1">Enter your text:</label>
      <textarea
        className={`w-full border rounded p-2 h-32 ${
          isOverLimit ? "border-red-500" : "border-gray-300"
        }`}
        placeholder="Type or paste text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="flex justify-between text-sm mt-1">
        <span className={isOverLimit ? "text-red-600" : "text-gray-500"}>
          Characters: {characterCount} / {MAX_CHARACTERS}
        </span>
        <span className="text-gray-500">Words: {wordCount}</span>
      </div>

      {isEmpty && (
        <p className="text-sm text-red-600 mt-1">Text cannot be empty.</p>
      )}
      {isOverLimit && (
        <p className="text-sm text-red-600 mt-1">
          Text exceeds the maximum allowed length.
        </p>
      )}
    </div>
  )
}

export default TextInput