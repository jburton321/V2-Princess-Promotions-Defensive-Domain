import Image from 'next/image'

type BentoTile = {
  src: string
  alt: string
  /** Grid placement: which cell the tile starts at and how far it spans. */
  area: string
}

type BentoGridProps = {
  tiles?: BentoTile[]
}

/**
 * Bento-styled image grid. The container is a mathematically exact rectangle:
 * a 4-column x 2-row track that is fully tiled with no ragged edges, locked to
 * a 2:1 aspect ratio so every cell resolves to a clean square.
 */
const defaultTiles: BentoTile[] = [
  {
    src: '/images/lifestyle-amalfi-couple.jpg',
    alt: 'Couple overlooking a coastal town on a European vacation',
    area: '1 / 1 / 3 / 3',
  },
  {
    src: '/images/lifestyle-couple-overlook.png',
    alt: 'Couple in sunglasses relaxing on a wall with mountain views',
    area: '1 / 3 / 2 / 5',
  },
  {
    src: '/images/lifestyle-beach-relax.png',
    alt: 'Woman in a sun hat relaxing on a deck chair at a tropical beach',
    area: '2 / 3 / 3 / 4',
  },
  {
    src: '/images/cruise-ship-deck-pools.jpg',
    alt: 'Aerial view of a cruise ship top deck with pools, water slides, and lounge areas at sea',
    area: '2 / 4 / 3 / 5',
  },
]

export function BentoGrid({ tiles = defaultTiles }: BentoGridProps) {
  return (
    <div className="bento-grid">
      {tiles.map((tile, i) => (
        <div key={i} className="bento-cell" style={{ gridArea: tile.area }}>
          <Image
            src={tile.src}
            alt={tile.alt}
            fill
            className="object-cover"
            sizes="(max-width: 700px) 100vw, 50vw"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  )
}
