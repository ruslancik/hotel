import React from 'react'
import Hero from '../component/Hero'
import Banner from '../component/Banner'
import { Link } from 'react-router-dom'
import Services from '../component/Services'

export default function Home() {
    return (
        <>
        <Hero hero='defaultHero'>
            <Banner title='Luxirous rooms' subtitle='deluxe rooms start from $299'>
                <Link to='/room' className='btn-primary'> Our Rooms</Link>    
            </Banner>    
        </Hero>
        <Services />
        </>
    )
}


