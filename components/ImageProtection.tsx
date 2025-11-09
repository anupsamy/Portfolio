'use client'

import { useEffect } from 'react'

export default function ImageProtection() {
  useEffect(() => {
    // Prevent right-click context menu on images
    const handleContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'IMG' || target.closest('img')) {
        e.preventDefault()
        return false
      }
    }

    // Prevent drag and drop
    const handleDragStart = (e: DragEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'IMG' || target.closest('img')) {
        e.preventDefault()
        return false
      }
    }

    // Prevent common image-saving keyboard shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      // Disable Ctrl+S (Save Page) when focused on images
      if (e.ctrlKey && e.key === 's') {
        const target = e.target as HTMLElement
        if (target.tagName === 'IMG' || target.closest('img')) {
          e.preventDefault()
          return false
        }
      }
    }

    // Add event listeners
    document.addEventListener('contextmenu', handleContextMenu)
    document.addEventListener('dragstart', handleDragStart)
    document.addEventListener('keydown', handleKeyDown)

    // Cleanup
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu)
      document.removeEventListener('dragstart', handleDragStart)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return null
}

