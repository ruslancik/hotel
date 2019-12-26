import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'

export default class Services extends Component {

    state = {
        services : [
            {
                icon: <FaCocktail />,
                title: 'Free Coctail',
                subtitle: 'Lorem ipsum dolar sit amet lorem ipsum dolat sit emmet'
            },
            {
                icon: <FaHiking/>,
                title: 'Extreme Hiking',
                subtitle: 'Lorem ipsum dolar sit amet lorem ipsum dolat sit emmet'
            },
            {
                icon: <FaShuttleVan />,
                title: 'Free Van Tour',
                subtitle: 'Lorem ipsum dolar sit amet lorem ipsum dolat sit emmet'
            },
            {
                icon: <FaBeer />,
                title: 'Strongest Beer',
                subtitle: 'Lorem ipsum dolar sit amet lorem ipsum dolat sit emmet'
            }
        ]
    }
    render() {
        return (
            <section className='services'>
                <Title title={'Services'}/>
                <div className='services-center'>
                    {this.state.services.map((item,index) => {
                       return <article key={index} className='service'>
                                    <span>{item.icon}</span>
                                    <h6>{item.title}</h6>
                                    <p>{item.subtitle}</p>
                              </article>;
                    })}
                </div>

            </section>
        )
    }
}
