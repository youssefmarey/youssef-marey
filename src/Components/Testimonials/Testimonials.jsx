import React from 'react'
import { statsItems, testimonialsItems } from '../../constant/data'
import { RiStarFill } from '@remixicon/react'

const Testimonials = () => {
  return (
    <section className='pt-28' >
        <div className="container">
            {/* Title */}
            <div>
                <h2 className='section-title' >Testimonials</h2>
                <p>Real feedback from real projects.</p>
            </div>
            {/* Wrapper */}
            <div className="grid gap-7 mt-8 sm:grid-cols-2 lg:grid-cols-3">
                {testimonialsItems.map(item => (
                    // crad 
                    <div className="bg-zinc-100 p-8 rounded-lg flex flex-col dark:bg-zinc-900" key={item.id} >
                        <p className='mb-5' >{item.text}</p>
                        {/* Author Info */}
                        <div className="flex items-center gap-3 mt-auto">
                            <p className='font-semibold' >{item.name}</p>
                            <div className="flex items-center text-yellow-600">
                                <RiStarFill size={16} />
                                <RiStarFill size={16} />
                                <RiStarFill size={16} />
                                <RiStarFill size={16} />
                                <RiStarFill size={16} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* Status */}
            <div className='flex flex-col sm:flex-row sm:flex-wrap mt-14 gap-12 md:gap-14 justify-center' >
                {statsItems.map(item => (
                    <div className="text-center" key={item.id}>
                        <h3 className='text-4xl' >{item.value}</h3>
                        <p>{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Testimonials