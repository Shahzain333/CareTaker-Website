import React from 'react'

export default  function Button({
    children = '',
    type = '',
    className = '',
    ...props
}) {
  return (
    <>
      <button type={type} className={` px-4 py-[5px] rounded-md ${className}`} {...props}>
        { children }
      </button>
    </>
  )
}

