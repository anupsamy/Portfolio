import { Mail } from 'lucide-react'
import Link from 'next/link'

export default function CommissionPage() {
  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-4xl font-bold text-gray-900 mb-8">Commissions</h1>

        {/* Status Section */}
        <section className="mb-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <div className="space-y-2">
            <p className="text-lg">
              <span className="font-medium">Status: Open to commercial work only. Please <strong><a href="mailto:vaiycee.art@gmail.com" target="_blank"className="text-600 hover:underline">contact me</a></strong> to discuss your project.</span>
            </p>
          </div>
        </section>

        {/* Options Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Options</h2>
          <div className="space-y-6">
            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Standard</h3>
              <ul className="space-y-2 text-gray-700">
                <li>・Personal, non-commercial use only</li>
                <li>・If closed, please contact to be added to waitlist</li>
              </ul>
            </div>

            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Commercial</h3>
              <ul className="space-y-2 text-gray-700">
                <li>・Includes commercial licensing</li>
                <li>・Additional 50-300% of final price depending on project size</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Process</h2>
          <div className="space-y-4">
            <div className="flex items-start p-4 bg-white rounded-lg border border-gray-200">
              <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-semibold mr-4">1</span>
              <p className="text-gray-700 pt-1">Commission order is accepted</p>
            </div>
            <div className="flex items-start p-4 bg-white rounded-lg border border-gray-200">
              <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-semibold mr-4">2</span>
              <p className="text-gray-700 pt-1">Invoice sent is paid by the client</p>
            </div>
            <div className="flex items-start p-4 bg-white rounded-lg border border-gray-200">
              <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-semibold mr-4">3</span>
              <p className="text-gray-700 pt-1">Draft, render, then final product is sent intermittently & approved by client</p>
            </div>
            <div className="flex items-start p-4 bg-white rounded-lg border border-gray-200">
              <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-semibold mr-4">4</span>
              <p className="text-gray-700 pt-1">Final product in original resolution is emailed to the client</p>
            </div>
          </div>
        </section>

        {/* Terms of Service Link */}
        <section className="mb-12">
          <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Terms of Service</h2>
            <p className="text-gray-700 mb-4">
              Please read and understand our Terms of Service before placing a commission order.
            </p>
            <Link
              href="/commission/terms"
              className="inline-block px-4 py-2 text-sm bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              View Terms of Service
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

