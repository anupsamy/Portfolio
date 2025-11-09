import { artworks } from '@/data/artworks'
import PortfolioClient from './portfolio/PortfolioClient'

export default function Home() {
  return <PortfolioClient artworks={artworks} />
}

