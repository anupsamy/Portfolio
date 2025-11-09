'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Mail } from 'lucide-react'
import Link from 'next/link'

interface FAQItem {
  question: string
  answer: string | JSX.Element
}

const faqData: FAQItem[] = [
  {
    question: 'Are commissions currently open?',
    answer: 'Commissions are currently closed, but the waitlist is open! You can email or DM on Instagram/Twitter to be added to the waitlist. No payment is required to join the waitlist.',
  },
  {
    question: 'How do I place a commission order?',
    answer: (
      <>
        Email to <a href="mailto:vaiycee.art@gmail.com" className="text-gray-900 font-semibold hover:underline">vaiycee.art@gmail.com</a> or DM on{' '}
        <a href="https://instagram.com/sikabahn" target="_blank" rel="noopener noreferrer" className="text-gray-900 font-semibold hover:underline">Instagram</a> /{' '}
        <a href="https://twitter.com/sikabahn" target="_blank" rel="noopener noreferrer" className="text-gray-900 font-semibold hover:underline">Twitter</a>. Include your PayPal email address, commission type, visual references, background references, optional preferred dimensions, and any additional details about character traits, personality, pose, etc.
      </>
    ),
  },
  {
    question: 'What are your commission prices?',
    answer: (
      <>
        Base prices (in USD): Bust - $250, Half Body - $330, Knee Length - $350, Full Body - $400. These are base prices only. Simple backgrounds come free, but additional fees may apply based on complexity, detail, and props. Multiple characters are calculated as (base price of 1 character) × (number of characters). For more details, check the{' '}
        <Link href="/commission" className="text-gray-900 font-semibold hover:underline">Commission page</Link>.
      </>
    ),
  },
  {
    question: 'What is the difference between standard and commercial commissions?',
    answer: 'Standard commissions are for personal, non-commercial use only. Commercial commissions include commercial licensing and cost an additional 50-300% of the final price depending on project size.',
  },
  {
    question: 'What are priority commissions?',
    answer: 'Priority commissions allow you to skip the accepted commission waitlist or request a deadline. The price is calculated as (base price) + (50% of base price) = priority base price.',
  },
  {
    question: 'How long does a commission take to complete?',
    answer: 'Completion time varies from weeks to months depending on the complexity of the commission and current workload. Feel free to reach out to ask for updates on your commission status.',
  },
  {
    question: 'What is the commission process?',
    answer: (
      <>
        1. Commission order is accepted → 2. PayPal invoice is sent and paid → 3. Rough sketch is sent for approval → 4. Rough colors are sent for approval → 5. Final piece is sent for approval → 6. All files are emailed to the client. For more details, visit the{' '}
        <Link href="/commission" className="text-gray-900 font-semibold hover:underline">Commission page</Link>.
      </>
    ),
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'Payment is accepted via PayPal or Stripe. Full payment must be received before the commission is started.',
  },
  {
    question: 'Do you offer refunds?',
    answer: 'No refunds are offered unless the commission has not been started after 4 months. Please review the Terms of Service before placing an order.',
  },
  {
    question: 'Can I request revisions?',
    answer: 'Yes! The commission process includes approval stages for the rough sketch and rough colors, allowing you to request changes before the final piece is completed. Once the final piece is approved, major revisions may incur additional fees.',
  },
  {
    question: 'What file format will I receive?',
    answer: 'You will receive all files via email. Standard dimensions are A4 canvas at 300 dpi, but you can request different dimensions when placing your order.',
  },
  {
    question: 'Can I use the commissioned artwork commercially?',
    answer: 'Only if you purchase a commercial commission. Standard commissions are for personal, non-commercial use only. Commercial commissions include licensing rights for commercial use.',
  },
  {
    question: 'Do you retain rights to post the commissioned artwork?',
    answer: 'Yes, I hold all rights to post and use the commissioned artwork unless told otherwise. When sharing the artwork publicly, complete credit (links + social media handles) must be included.',
  },
  {
    question: 'Can I commission multiple characters in one piece?',
    answer: 'Yes! Multiple characters per canvas are calculated as (base price of 1 character) × (number of characters). Complex backgrounds and characters are welcome.',
  },
  {
    question: 'What if I want something not listed in your prices?',
    answer: 'I am willing to adjust based on client needs and can work on various projects such as character sheets, cover illustrations, customs, etc. Please feel free to inquire regarding pricing for anything not listed.',
  },
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
        <p className="text-lg text-gray-600 mb-12">
          Have a question? Check below or{' '}
          <a href="mailto:vaiycee.art@gmail.com" className="text-gray-900 font-semibold hover:underline">
            contact me
          </a>{' '}
          directly.
        </p>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-5 h-5 text-gray-600 flex-shrink-0" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 text-gray-700 border-t border-gray-200">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Still have questions?</h2>
          <p className="text-gray-600 mb-4">
            Don&apos;t hesitate to reach out via email or social media
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:vaiycee.art@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Send Email
            </a>
            <a
              href="https://instagram.com/sikabahn"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-colors"
            >
              DM on Instagram
            </a>
            <a
              href="https://twitter.com/sikabahn"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-colors"
            >
              DM on Twitter
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

