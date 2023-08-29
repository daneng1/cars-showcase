'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { CarCardProps } from '@/types'

const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, combination_mpg, cylinders, drive, fuel_type, highway_mpg, make, model, transmission, year} = car

  return (
    <div className='car-card group'>
      <div className='car-card__content'>
        <h2 className='car-card__content-title'>
          {make} {model}
        </h2>
      </div>
    </div>
  )
}

export default CarCard