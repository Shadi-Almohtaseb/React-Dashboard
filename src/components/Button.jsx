import React from 'react'

const Button = ({bgColor , color , size , text , borderRadius}) => {
  return (
    <button type='button' style={{backgroundColor: bgColor , color , borderRadius}} className={`text-${size} p-3 hover:scale-110 hover:drop-shadow-xl duration-500`}>
      {text}
    </button>
  )
}

export default Button
