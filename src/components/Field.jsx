import React from 'react'
import { v4 as uuidv4 } from 'uuid'

const Field = ({ fields }) => {
  return (
    <div className="field">
      {fields.map((row) => {
        return row.map((column) => {
          return <div className={`dots ${column}`} key={uuidv4()}></div>
        })
      })}
    </div>
  )
}

export default Field
