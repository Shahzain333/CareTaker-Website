import React from 'react'

export default  function Button({
    children = '',
    type = '',
    className = '',
    ...props
}) {
  return (
    <>
      <button type={type} className={`${className}`} {...props}>
        { children }
      </button>
    </>
  )
}

