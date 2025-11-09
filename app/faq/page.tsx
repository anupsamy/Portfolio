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
    question: 'Any special skills?',
    answer: 'I give good life advice that I can\'t use myself.',
  },
  {
    question: 'Do you have art tips?',
    answer: 'One brush can do many things.',
  },
  {
    question: 'Tools?',
    answer: 'iPad and Procreate, sometimes a pencil and paper.',
  },
  {
    question: 'What would you do if you weren\'t making art?',
    answer: 'Tbh I don\'t really know...',
  },
  {
    question: 'Can I use your art as a profile picture?',
    answer: 'Happily yes! Credit would be nice, not required.',
  },
  {
    question: 'Favorite food?',
    answer: 'Mango desserts and anything spicy.',
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
        <h1 className="text-4xl md:text-4xl font-bold text-gray-900 mb-4">FAQ</h1>


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
      </div>
    </div>
  )
}

