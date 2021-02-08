import React from 'react'
import { Button } from 'react-bootstrap'

export function ButtonComponent ({ variant = 'success',value }) {
  return (
    <div className={'btn_div'}>
      <Button variant={variant}>{value}</Button>
    </div>
  )
}