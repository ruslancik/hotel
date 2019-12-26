import React from 'react'
import Hero from '../component/Hero'
import { Link } from 'react-router-dom'
import Banner from '../component/Banner'

export default function Error() {
    return (
        <Hero>
            <Banner title='404' subtitle='Page not found'>
                <Link to='/' className='btn-primary'>Return Home</Link>
            </Banner>
        </Hero>
    )
}
