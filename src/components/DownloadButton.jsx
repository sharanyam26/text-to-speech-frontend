function DownloadButton({ text }) {
  function handleDownload() {
    const blob = new Blob([text], { type: "text/plain" })
    const url = URL.createObjectURL(blob)

    const link = document.createElement("a")
    link.href = url
    link.download = "speech-transcript.txt"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    URL.revokeObjectURL(url)
  }

  return (
    <button
      onClick={handleDownload}
      className="px-4 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 text-sm"
    >
      Download Transcript (.txt)
    </button>
  )
}

export default DownloadButton