function ErrorMessage({ message }) {
  if (!message) return null

  return (
    <div className="bg-red-50 border border-red-300 text-red-700 rounded p-3 text-sm">
      {message}
    </div>
  )
}

export default ErrorMessage