export interface ArtworkInput {
  id: string
  image: string
  width: number
  height: number
  description?: string
}

export interface Artwork {
  id: string
  title: string // first 4 letters of filename
  image: string
  width: number
  height: number
  description?: string
}

// Helper function to extract first 4 letters from filename
function getTitleFromImage(imagePath: string): string {
  const filename = imagePath.split('/').pop() || imagePath
  const nameWithoutExt = filename.replace(/\.[^/.]+$/, '')
  return nameWithoutExt.substring(0, 4).toUpperCase()
}

// Process artworks to add auto-generated title
function processArtworks(inputs: ArtworkInput[]): Artwork[] {
  return inputs.map((input) => {
    const title = getTitleFromImage(input.image)
    
    return {
      ...input,
      title,
    }
  })
}

// Raw artwork data - add id, image, width, height, and optional description
export const artworkInputs: ArtworkInput[] = [
    {
      id: 'artwork-15',
      image: '/images/2026-07-27.png',
      width: 1200,
      height: 1600,
    },
    {
      id: 'artwork-16',
      image: '/images/2026-07-25.png',
      width: 1200,
      height: 1600,
    },
    {
      id: 'artwork-17',
      image: '/images/2026-05-07.png',
      width: 1200,
      height: 1600,
    },
    {
      id: 'artwork-18',
      image: '/images/2026-05-05.png',
      width: 1200,
      height: 1600,
    },
    {
      id: 'artwork-19',
      image: '/images/2026-04-22.png',
      width: 1200,
      height: 1600,
    },
    {
      id: 'artwork-20',
      image: '/images/2026-03-25.png',
      width: 1200,
      height: 1600,
    },
    {
      id: 'artwork-1',
      image: '/images/2025-09-05.png',
      width: 1200,
      height: 1600,
    },
    {
      id: 'artwork-2',
      image: '/images/2025-05-31.png',
      width: 1200,
      height: 1600,
    },
    {
      id: 'artwork-3',
      image: '/images/2025-04-09.png',
      width: 1200,
      height: 1600,
    },
    {
      id: 'artwork-4',
      image: '/images/2025-03-30.png',
      width: 1200,
      height: 1600,
    },
    {
      id: 'artwork-5',
      image: '/images/2025-01-13-c.png',
      width: 1200,
      height: 1600,
    },
    {
      id: 'artwork-7',
      image: '/images/2024-07-26.png',
      width: 1200,
      height: 1600,
    },
    {
      id: 'artwork-8',
      image: '/images/2023-10-16ver2.png',
      width: 1200,
      height: 1600,
    },
    {
      id: 'artwork-9',
      image: '/images/2023-08-22-c.png',
      width: 1200,
      height: 1600,
    },
    {
      id: 'artwork-10',
      image: '/images/2023-08-08.png',
      width: 1200,
      height: 1600,
    },
    {
      id: 'artwork-11',
      image: '/images/2023-06-12(2).png',
      width: 1200,
      height: 1600,
    },
    {
      id: 'artwork-12',
      image: '/images/2023-06-01.png',
      width: 1200,
      height: 1600,
    },
    {
      id: 'artwork-13',
      image: '/images/2023-05-12.png',
      width: 1200,
      height: 1600,
    },
    {
      id: 'artwork-14',
      image: '/images/2023-01-22-c.png',
      width: 1200,
      height: 1600,
    },
  ]

// Processed artworks with auto-generated title and dimensions
export const artworks: Artwork[] = processArtworks(artworkInputs)
