import React from 'react'
import { Button as Btn } from 'react-bootstrap'

export default function ButtonComponent ({handleClick, variant = 'success', value }) {
  return (
    <div className={'btn_div'}>
      <Btn onClick={handleClick} variant={variant}>{value}</Btn>
    </div>
  )
}