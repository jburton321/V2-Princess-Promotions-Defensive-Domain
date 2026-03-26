'use client'

import { type ReactNode } from 'react'
import { MatchedHeightMediaGrid } from '@/components/MatchedHeightMediaGrid'

type Props = {
  children: ReactNode
  imageSrc: string
  imageAlt: string
}

export function WhatIsPPIntroGrid({ children, imageSrc, imageAlt }: Props) {
  return (
    <MatchedHeightMediaGrid
      imageFirst={false}
      gridClassName="media-grid media-grid--what-is-intro"
      imageSrc={imageSrc}
      imageAlt={imageAlt}
    >
      {children}
    </MatchedHeightMediaGrid>
  )
}
