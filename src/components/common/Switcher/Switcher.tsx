import React from 'react'

import './Switcher.scss'

type Props = {
  first: string
  second: string
  value: boolean
  onChange: any
}

const Switcher: React.FC<Props> = ({ first, second, value, onChange }) => (
  <div className="switcher">
    <span className="left-language">{first}</span>
    <input type="checkbox" className="check" checked={value} onChange={onChange} />
    <span className="right-language">{second}</span>
  </div>
)

export default Switcher
