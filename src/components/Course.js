import React from 'react'
import { MdAccessAlarm } from "react-icons/md";
import { FaBookOpen ,FaChevronRight ,FaStar} from "react-icons/fa";


export default function Course({img, title,department,description,rating,price,discount,lessons,duration,sales}) {
  return (
    <div className='course'>
        <span className='sale'>Sale</span>
        <img src={img} alt={title} />
        <div className='content'>
          <div className='course-feild'>
            <p className='deprtment'>{department}</p>
            <p className='rating'>{rating} <FaStar />
            </p>
          </div>
          <h3>{title}</h3>
          <p className='description'>{description}</p>
          <p className='sales'>{sales} Sales</p>
          <p className='price'>
            <del>{price}</del>
            <span className='text-secondary'>{discount}</span>
          </p>
          <div className='course-info'>
            <p className='duration'> <MdAccessAlarm />
               {duration}</p>
            <p className='lessons'> <FaBookOpen />
               {lessons}</p>

          </div>
         <a href='/' className='btn-learn'>Learn More <FaChevronRight />
         </a>

        </div>
    </div>
  )
}
