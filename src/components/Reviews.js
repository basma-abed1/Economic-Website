import React from 'react'
import SectionHeader from './SectionHeader'
import {ratingData} from "./data.js"
import Review from "./Review.js"
export default function () {
  return (
    <section id='reviews'>
        <div className='container'>
          <SectionHeader title={"Each and every client is important" } description={"Discover what our students are saying in the Reviews saction! Real feedback from learning who have experienced and benfited from our courses."}/>
          <div className='ratings'>
           {ratingData.map((rating) => {
            const {id, description,img,job,name,stars} = rating
             return <Review key={id} description={description} img={img} job={job} name={name} stars={stars}/>
           })}
          </div>
        </div>
    </section>
  )
}
