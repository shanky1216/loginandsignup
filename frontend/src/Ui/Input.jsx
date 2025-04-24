import React from 'react'

const Input = ({label,line, ...props}) => {
  let css = "bg-white outline-none px-1 py-2 border-1 border-gray-400 rounded-sm"
  if(line){
    css += ' w-1/2';
  }else{
    css += ' w-full'
  }
  return (
    <p  className={css}>
        <label>{label}</label>
        <input className='w-full outline-none' {...props}/>
    </p>
  )
}

export default Input;