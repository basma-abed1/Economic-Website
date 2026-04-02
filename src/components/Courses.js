import React from 'react'
import SectionHeader from './SectionHeader'
import {coursesData} from "./data.js"
import Course from './Course'
export default function Courses() {
  return (
   <section id='courses'>
    <div className='container'>
      <SectionHeader title= "Make Online education acessible" description = "Education is the most powerful tool to unlock potential ignite curiosity and shape a brighter future At our platform we bleve in making learning accesible engaging and transformative empowering students to achive their dreams and buld the skills to need for sucess in an ever-changing world"/>
   
    <div className='courses-container'>
     {coursesData.map((course) => {
      const {department, description,discount,duration,id, img,lessons,price,rating,sales,title} = course
      return <Course key={id} department={department} description={description} discount={discount} img={img} lessons={lessons} rating={rating} sales={sales} price={price} title={title} duration={duration}/>
     })}
    </div>
     </div>
   </section>
  )
}
