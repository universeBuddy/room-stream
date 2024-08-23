import CallList from '@/components/CallList'
import React from 'react'

const Upcomming = () => {
  return (
    <section className='flex size-full flex-col gap-10 text-white'>

    <h1 className='text-3xl font-bold'>
     Upcomming
    

     <CallList type = "upcoming" />
    </h1>
  </section>
  )
}

export default Upcomming