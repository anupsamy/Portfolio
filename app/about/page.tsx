'use client'

import Image from 'next/image'
import { Instagram, Twitter, Mail } from 'lucide-react'

// Prevent right-click and drag
const preventContextMenu = (e: React.MouseEvent) => {
  e.preventDefault()
  return false
}

const preventDrag = (e: React.DragEvent) => {
  e.preventDefault()
  return false
}

export default function AboutPage() {
  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Section - Left Side */}
          <div 
            className="relative w-full aspect-square max-w-md mx-auto md:mx-0 select-none"
            onContextMenu={preventContextMenu}
            onDragStart={preventDrag}
          >
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              <Image
                src="/images/2025-07-15.png"
                alt="Sikabahn"
                fill
                className="object-contain pointer-events-none"
                draggable={false}
              />
            </div>
          </div>

          {/* Text Section - Right Side */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">About</h1>
            
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p className="text-lg leading-relaxed">
                Welcome to my art portfolio. I'm Sikabahn, and I create art that explores the intersection of 
                imagination and reality.
              </p>
              
              <p className="text-lg leading-relaxed">
                My work is inspired by the world around me, blending traditional techniques with modern 
                perspectives to create pieces that tell stories and evoke emotions.
              </p>
              
              <p className="text-lg leading-relaxed">
                Through my art, I aim to capture moments of beauty, wonder, and introspection, inviting 
                viewers to see the world through a different lens.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 pt-4">
              <a
                href="https://instagram.com/sikabahn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-purple-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/sikabahn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:vaiycee.art@gmail.com"
                className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

