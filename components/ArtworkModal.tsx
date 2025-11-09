'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

import type { Artwork } from '@/data/artworks'

// Prevent right-click and drag
const preventContextMenu = (e: React.MouseEvent) => {
  e.preventDefault()
  return false
}

const preventDrag = (e: React.DragEvent) => {
  e.preventDefault()
  return false
}

interface ArtworkModalProps {
  artworks: Artwork[]
  currentIndex: number
  onClose: () => void
  onNavigate: (index: number) => void
}

export default function ArtworkModal({ artworks, currentIndex, onClose, onNavigate }: ArtworkModalProps) {
  const artwork = artworks[currentIndex]
  const hasPrevious = currentIndex > 0
  const hasNext = currentIndex < artworks.length - 1

  const handlePrevious = () => {
    if (hasPrevious) {
      onNavigate(currentIndex - 1)
    }
  }

  const handleNext = () => {
    if (hasNext) {
      onNavigate(currentIndex + 1)
    }
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' && hasPrevious) {
        onNavigate(currentIndex - 1)
      } else if (e.key === 'ArrowRight' && hasNext) {
        onNavigate(currentIndex + 1)
      } else if (e.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentIndex, hasPrevious, hasNext, onNavigate, onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 text-white/80 hover:text-white transition-colors"
        aria-label="Close"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Previous Arrow */}
      {hasPrevious && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            handlePrevious()
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 text-white/80 hover:text-white transition-colors bg-black/20 hover:bg-black/40 rounded-full"
          aria-label="Previous artwork"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
      )}

      {/* Next Arrow */}
      {hasNext && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            handleNext()
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 text-white/80 hover:text-white transition-colors bg-black/20 hover:bg-black/40 rounded-full"
          aria-label="Next artwork"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      )}
      
      <AnimatePresence mode="wait">
        <motion.div
          key={artwork.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1, ease: 'easeInOut' }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-[95vw] max-h-[95vh] select-none"
        >
          <div
            onContextMenu={preventContextMenu}
            onDragStart={preventDrag}
            className="w-full h-full"
          >
            <Image
              src={artwork.image}
              alt={artwork.title}
              width={artwork.width}
              height={artwork.height}
              className="max-w-full max-h-[95vh] w-auto h-auto object-contain pointer-events-none"
              draggable={false}
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

