import Image from 'next/image'

type ImageDividerProps = {
  src: string
  alt: string
}

export function ImageDivider({ src, alt }: ImageDividerProps) {
  return (
    <div className="img-div">
      <Image src={src} alt={alt} fill className="object-cover" sizes="100vw" loading="lazy" />
    </div>
  )
}
