'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import type { Artwork } from '@/data/artworks'
import ArtworkModal from '@/components/ArtworkModal'

interface PortfolioClientProps {
  artworks: Artwork[]
}

export default function PortfolioClient({ artworks }: PortfolioClientProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const handleArtworkClick = (artwork: Artwork) => {
    const index = artworks.findIndex((a) => a.id === artwork.id)
    setSelectedIndex(index >= 0 ? index : null)
  }

  const handleNavigate = (index: number) => {
    setSelectedIndex(index)
  }

  const handleClose = () => {
    setSelectedIndex(null)
  }

  return (
    <div className="pt-16 min-h-screen">
      {/* Banner Section */}
      <section className="relative w-full h-[60vh] min-h-[400px] overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center z-10 px-4"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">Sikabahn</h1>
            <p className="text-xl md:text-2xl text-gray-600">Art Portfolio</p>
          </motion.div>
        </div>
        {/* Placeholder for banner images - you can add images here later */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-gradient-to-r from-purple-200 via-pink-200 to-blue-200"></div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {artworks.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-gray-600 mb-4">No artwork yet.</p>
            <p className="text-gray-500">
              Add your artwork by editing <code className="bg-gray-100 px-2 py-1 rounded">data/artworks.ts</code>
            </p>
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-2">
            {artworks.map((artwork, index) => (
              <motion.div
                key={artwork.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="break-inside-avoid mb-2 cursor-pointer group"
                onClick={() => handleArtworkClick(artwork)}
              >
                <div className="relative overflow-hidden bg-gray-100">
                  <div className="aspect-w-1 aspect-h-1 w-full">
                    <Image
                      src={artwork.image}
                      alt={artwork.title}
                      width={artwork.width}
                      height={artwork.height}
                      className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                    <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium px-4 text-center">
                      {artwork.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* Artwork Modal */}
      {selectedIndex !== null && (
        <ArtworkModal
          artworks={artworks}
          currentIndex={selectedIndex}
          onClose={handleClose}
          onNavigate={handleNavigate}
        />
      )}
    </div>
  )
}

