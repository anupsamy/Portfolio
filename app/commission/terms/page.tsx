import Link from 'next/link'

export default function TermsOfServicePage() {
  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-6">
          <Link 
            href="/commission" 
            className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
          >
            ← Back to Commissions
          </Link>
        </div>

        <h1 className="text-4xl md:text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>

        <div className="p-6 bg-red-50 rounded-lg border border-red-200 mb-6">
          <p className="text-gray-900 font-semibold">
            The client <strong>must read, understand, and agree</strong> to all the terms before entering into an agreement with the artist. By sending payment, the client agrees to the following terms.
          </p>
        </div>

        <div className="p-6 bg-white rounded-lg border border-gray-200 mb-6">
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start">
              <span className="text-gray-900 font-semibold mr-2">・</span>
              <div>
                Payment must be received in full before the commission is started
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-gray-900 font-semibold mr-2">・</span>
              <div>
                No refunds unless the commission has not been started within 3 months of payment
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-gray-900 font-semibold mr-2">・</span>
              <div>
                Credit (link to social media) must be included when shared publicly
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-gray-900 font-semibold mr-2">・</span>
              <div>
                All rights to the commissioned artwork are reserved unless agreed otherwise
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-gray-900 font-semibold mr-2">・</span>
              <div>
                Completion time will vary and will be communicated to the client
              </div>
            </li>
          </ul>
        </div>

      </div>
    </div>
  )
}

