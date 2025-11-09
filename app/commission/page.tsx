import { Mail } from 'lucide-react'
import Link from 'next/link'

export default function CommissionPage() {
  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Commissions</h1>

        {/* Status Section */}
        <section className="mb-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Status</h2>
          <div className="space-y-2">
            <p className="text-lg">
              <span className="font-semibold">Commissions:</span> <span className="text-red-600">Closed</span>
            </p>
            <p className="text-lg">
              <span className="font-semibold">Waitlist:</span> <span className="text-green-600">Open</span>
            </p>
          </div>
        </section>

        {/* Options Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Options</h2>
          <div className="space-y-6">
            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Standard Commissions</h3>
              <ul className="space-y-2 text-gray-700">
                <li>・Personal, non-commercial use only</li>
                <li>・If closed, please contact to be added to waitlist</li>
              </ul>
            </div>

            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Commercial Commissions</h3>
              <ul className="space-y-2 text-gray-700">
                <li>・Includes commercial licensing</li>
                <li>・Additional 50-300% of final price depending on project size</li>
              </ul>
            </div>

            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Priority Commissions</h3>
              <ul className="space-y-2 text-gray-700">
                <li>・Skip accepted commission waitlist or request a deadline</li>
                <li>・(base price) + (50% of base price) = priority base price</li>
              </ul>
            </div>

            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Waitlist</h3>
              <ul className="space-y-2 text-gray-700">
                <li>・Email or DM on Instagram / Twitter to claim</li>
                <li>・Available for both standard & commercial commissions</li>
                <li>・Client will be contacted once I am ready to work on their commission</li>
                <li>・No payment required</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Prices Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Prices</h2>
          <p className="text-gray-600 mb-6">All prices in <strong className="text-gray-900">USD</strong></p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Bust</h3>
              <p className="text-3xl font-bold text-gray-900">$250</p>
            </div>
            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Half Body</h3>
              <p className="text-3xl font-bold text-gray-900">$330</p>
            </div>
            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Knee Length</h3>
              <p className="text-3xl font-bold text-gray-900">$350</p>
            </div>
            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Full Body</h3>
              <p className="text-3xl font-bold text-gray-900">$400</p>
            </div>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 mb-6">
            <p className="text-gray-700 mb-4">
              Options are all guidelines. I am willing to adjust based on the client&apos;s needs and can work on various projects such as character sheets, cover illustrations, customs etc. Please feel free to inquire regarding the pricing of anything not listed.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Additional Charges</h3>
            <ul className="space-y-2 text-gray-700">
              <li>・Amounts listed are base prices only</li>
              <li>・Simple background comes free of charge</li>
              <li>・Additional fees added based on commission complexity, detail & props</li>
              <li>・Multiple characters per canvas will be calculated in the following way:</li>
              <li className="ml-4">・(base price of 1 character) × (number of characters)</li>
              <li>・Complex backgrounds and characters are welcome to be requested</li>
            </ul>
          </div>
        </section>

        {/* Order Form Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Order Form</h2>
          <div className="p-6 bg-white rounded-lg border border-gray-200">
            <p className="text-gray-700 mb-4">
              Email to <a href="mailto:vaiycee.art@gmail.com" className="text-gray-900 font-semibold hover:underline">vaiycee.art@gmail.com</a> or DM on{' '}
              <a href="https://instagram.com/sikabahn" target="_blank" rel="noopener noreferrer" className="text-gray-900 font-semibold hover:underline">Instagram</a> /{' '}
              <a href="https://twitter.com/sikabahn" target="_blank" rel="noopener noreferrer" className="text-gray-900 font-semibold hover:underline">Twitter</a>
            </p>
            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              <li>PayPal email address</li>
              <li>Commission type</li>
              <li>Visual references</li>
              <li>Background references</li>
              <li>Optional: preferred dimensions (standard is an A4 canvas in 300 dpi)</li>
              <li>Additional: character traits, personality, pose, etc.</li>
            </ul>
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Process</h2>
          <div className="space-y-4">
            <div className="flex items-start p-4 bg-white rounded-lg border border-gray-200">
              <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-semibold mr-4">1</span>
              <p className="text-gray-700 pt-1">Commission order is accepted</p>
            </div>
            <div className="flex items-start p-4 bg-white rounded-lg border border-gray-200">
              <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-semibold mr-4">2</span>
              <p className="text-gray-700 pt-1">I send a PayPal invoice & invoice is paid by the client</p>
            </div>
            <div className="flex items-start p-4 bg-white rounded-lg border border-gray-200">
              <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-semibold mr-4">3</span>
              <p className="text-gray-700 pt-1">Rough sketch is sent & approved by client</p>
            </div>
            <div className="flex items-start p-4 bg-white rounded-lg border border-gray-200">
              <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-semibold mr-4">4</span>
              <p className="text-gray-700 pt-1">Rough colors are sent & approved by client</p>
            </div>
            <div className="flex items-start p-4 bg-white rounded-lg border border-gray-200">
              <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-semibold mr-4">5</span>
              <p className="text-gray-700 pt-1">Final piece is sent & approved by client</p>
            </div>
            <div className="flex items-start p-4 bg-white rounded-lg border border-gray-200">
              <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-semibold mr-4">6</span>
              <p className="text-gray-700 pt-1">I email all the files to the client</p>
            </div>
          </div>
        </section>

        {/* Terms of Service Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Terms of Service</h2>
          <div className="p-6 bg-red-50 rounded-lg border border-red-200 mb-4">
            <p className="text-gray-900 font-semibold">
              The client <strong>must read, understand, and agree</strong> to all the terms before entering into an agreement with the artist. By sending payment, the client agrees to the following terms.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg border border-gray-200">
            <ul className="space-y-3 text-gray-700">
              <li>・<strong>Payment via PayPal or Stripe</strong> and must be received in <strong>full</strong> before commission is started</li>
              <li>・<strong>No refunds</strong> unless commission has not been started after 4 months</li>
              <li>・<strong>Prices listed for personal commissions only.</strong> Inquire for commercial prices please</li>
              <li>・<strong>Complete credit</strong> (links + social media handles) must be included when shared publicly</li>
              <li>・<strong>I hold all rights to post and use the commissioned artwork</strong> unless told otherwise</li>
              <li>・<strong>Completion time will vary</strong> (weeks - months). Feel free to reach out to ask for updates</li>
            </ul>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="p-6 bg-gray-900 text-white rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Commission?</h2>
          <p className="text-gray-300 mb-6">
            Send an email or DM to get started or join the waitlist
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:vaiycee.art@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Send Email
            </a>
            <a
              href="https://instagram.com/sikabahn"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              DM on Instagram
            </a>
            <a
              href="https://twitter.com/sikabahn"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              DM on Twitter
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}

