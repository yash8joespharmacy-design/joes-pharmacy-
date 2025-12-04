"use client"

// Offline fallback page for PWA
export default function OfflinePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-teal-50 p-4">
      <div className="text-center max-w-md">
        <div className="h-16 w-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-600 to-teal-600 flex items-center justify-center">
          <span className="text-white font-bold text-2xl">J</span>
        </div>
        <h1 className="text-3xl font-bold text-blue-900 mb-4">You're Offline</h1>
        <p className="text-gray-600 mb-6">
          It looks like you've lost your internet connection. Some features may not be available until you're back
          online.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-900">
          <p className="font-medium mb-2">While offline, you can:</p>
          <ul className="text-left space-y-1">
            <li>• View previously loaded prescriptions</li>
            <li>• Review your profile information</li>
            <li>• Access contact information</li>
          </ul>
        </div>
        <button
          onClick={() => window.location.reload()}
          className="mt-6 px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
        >
          Try Again
        </button>
        <p className="mt-4 text-sm text-gray-500">
          Contact us:{" "}
          <a href="tel:256-230-3416" className="text-teal-600 hover:underline">
            256-230-3416
          </a>
        </p>
      </div>
    </div>
  )
}
