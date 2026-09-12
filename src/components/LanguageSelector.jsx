function LanguageSelector({ languages, selectedLanguage, setSelectedLanguage }) {
  return (
    <div className="flex-1">
      <label className="block text-gray-700 mb-1">Language:</label>
      <select
        className="w-full border border-gray-300 rounded p-2"
        value={selectedLanguage}
        onChange={(e) => setSelectedLanguage(e.target.value)}
      >
        {languages.map((lang) => (
          <option key={lang} value={lang}>
            {lang}
          </option>
        ))}
      </select>
    </div>
  )
}

export default LanguageSelector