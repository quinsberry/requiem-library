import React from 'react'

import './Input.scss'

type Props = {
  placeholder?: string
}

const Input: React.FC<Props> = ({ placeholder }) => {
  return (
    <div className="input-field">
      <input placeholder={placeholder} type="text" />
    </div>
  )
}

export default Input
