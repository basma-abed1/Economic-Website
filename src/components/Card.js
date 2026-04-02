import React from 'react'

export default function Card( {img, title,color, descripttion, bgColor}) {
  return (
    <div className='card'>
        <span className='icon' style={{color : color, backgroundColor:bgColor}}>{img}</span>
         <h2>{title}</h2>
         <span className='line'></span>
         <p>{descripttion}</p>
    </div>
    
  )
}
