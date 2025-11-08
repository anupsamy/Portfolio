import { artworks } from '@/data/artworks'
import PortfolioClient from './PortfolioClient'

export default function PortfolioPage() {
  return <PortfolioClient artworks={artworks} />
}

