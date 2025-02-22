import React from 'react'

export default  function Button({
    children = '',
    type = '',
    className = '',
    ...props
}) {
  return (
    <>
      <button type={type} className={` px-4 py-2 rounded ${className}`} {...props}>
        { children }
      </button>
    </>
  )
}

