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
                unoptimized
                draggable={false}
              />
            </div>
          </div>

          {/* Text Section - Right Side */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">About</h1>
            
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p className="text-lg leading-relaxed">
                Hello, nice to meet you. I'm Sika!
              </p>
              
              <p className="text-lg leading-relaxed">
                Making art, for me, is like playing with magic. With canvas and paint, I want to capture a world I can fall into — one in which light engraves time. For the sake of food and shelter though, I'm an engineering student. 
              </p>
              
              <p className="text-lg leading-relaxed">
                Thank you for visiting my site, I hope you enjoy your stay.
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
                target="_blank"
                rel="noopener noreferrer"
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

