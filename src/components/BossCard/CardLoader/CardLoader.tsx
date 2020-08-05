import React from 'react'
import ContentLoader from 'react-content-loader'

const CardLoader = () => {
  return (
    <ContentLoader
      speed={2}
      width={293}
      height={181}
      viewBox="0 0 293 181"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <rect x="24" y="27" rx="3" ry="3" width="191" height="24" />
      <rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
      <rect x="24" y="59" rx="3" ry="3" width="111" height="20" />
      <rect x="24" y="88" rx="3" ry="3" width="243" height="20" />
      <rect x="51" y="128" rx="3" ry="3" width="92" height="20" />
      <rect x="24" y="128" rx="3" ry="3" width="19" height="20" />
      <circle cx="272" cy="15" r="10" />
    </ContentLoader>
  )
}

export default CardLoader
