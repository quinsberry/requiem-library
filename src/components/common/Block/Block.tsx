import React from 'react'

import './Block.scss'

type Props = {
  children: React.ReactNode
}
const Block: React.FC<Props> = ({ children }) => {
  return <div className="block">{children}</div>
}

export default Block
