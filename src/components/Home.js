import React from 'react'
import { cardData } from './data'
import Card from './Card'

export default function Home() {
  return (
    <section id='home'>
      <div className='container'>
        <div className='home-header'>
         <span>Join Us</span>
         <h1>Best Learning Opportunitise</h1>
         <p>we know how large object will act, but things on a smaall scale just do not act that way</p>
         <a href='#'className='btn btn-red'>Get Quote Now</a>
         <a href='#'className='btn btn-transparent'>Learn More</a>

        </div>
        <div className='card-container'>
          {cardData.map((card) => {
            const {title, id, bgColor, color, descripttion,img} = card

            return <Card key={id} title={title} bgColor={bgColor} color={color} descripttion={descripttion} img={img}/>
          })}
        </div>
        </div>  
    </section>
    
  )
}
