import React from 'react'

const Grid = ({ children, columns }) => {
  const tempCol = '1fr '.repeat(columns)
  
  return (
    <div className="grid" style={{ gridTemplateColumns: tempCol }}>
      {children}
    </div>
  )
}

export default Grid
