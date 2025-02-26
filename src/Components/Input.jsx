import React, { useId } from 'react'

function Input({
    label,
    type="text",
    className = '',
    placeholder="Enter text here",
    ...props
}, ref) {
    
    const id = useId();

  return (

    <div className=''>

        {label && <label htmlFor={id} className='block text-white font-medium mb-1 text-lg'>{label}</label>}
        
        <input className={`border-1 border-gray-500 rounded outline-none px-4 py-3 sm:text-[1rem] sm:font-medium
        duration-100 ease-in-out focus:border-primary focus:border-2 ${className}`} 
        placeholder={placeholder}
        type={type}
        ref={ref} 
        id={id}
        {...props} 
        />

    </div>

  )
}

export default React.forwardRef(Input)