import React from 'react'
import cn from 'classnames'

import './Switcher.scss'

type Props = {
  first: string
  second: string
  value: boolean
  onChange: any
}

const Switcher: React.FC<Props> = ({ first, second, value, onChange }) => (
  <div className="switcher">
    <span className={cn('left-language', { active: !value })}>{first}</span>
    <input type="checkbox" className="check" checked={value} onChange={onChange} />
    <span className={cn('right-language', { active: value })}>{second}</span>
  </div>
)

export default Switcher
