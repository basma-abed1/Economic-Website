import React from 'react'

export default function joinUs() {
  return (
    <section id='join-us'>
        <div className='content'>
            <p className='text-primary'>Practice Advice </p>
            <h2>JOIN US</h2>
            <p>Have questions or need assistance? Rech out to us through our our team we are here to help and ensure you have the best experience possible</p>
            <form>
                <input type='email' name='email' id='email' placeholder='Ypur Email'/>
                 <button type='submit'>Subscribe</button>
            </form>

        </div>
    </section>
  )
}
