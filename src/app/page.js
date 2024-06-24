import Aboutus from '@/components/AboutUs/Aboutus'
import Appointment from '@/components/Appointment/Appointment'
import Banner from '@/components/Banner/Banner'
import Booking from '@/components/Booking/Booking'
import Timings from '@/components/Timings/timings'
import React from 'react'

const page = () => {
  return (
    <div>
      <Banner/>
      <Timings/>
      <Appointment/>
      <Aboutus/>
      <Booking/>
    </div>
  )
}

export default page