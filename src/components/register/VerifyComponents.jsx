import { Warning } from 'assets/icons/warning'
import React from 'react'

export default function Error (props) {
  return (
    <div className='flex pl-1.5 items-center'>
      <Warning />
      <small className="pl-1 text-red-500 text-[10px] self-start">{props.children}</small>
    </div>
  )
}
