import React from 'react'
import cn from 'classnames'

import './Block.scss'

type Props = {
  children: React.ReactNode
  sidebar?: boolean
}
const Block: React.FC<Props> = ({ children, sidebar }) => {
  return <div className={cn('block', { sidebar: sidebar })}>{children}</div>
}

export default Block
