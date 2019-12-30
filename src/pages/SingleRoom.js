import React from 'react'
import defaultBcg from '../images/room-2.jpeg'
import Hero from '.././component/Hero'
import Banner from '.././component/Banner'
import {Link} from 'react-router-dom'
import {RoomContext} from '../context'

 class SingleRoom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
             slug : this.props.match.params.slug, // this parameter comes from routing after select room
             defaultBcg             
            }
    }
    static contextType = RoomContext;     // include context to component

    render(){

        const {getRoom} = this.context;      // this bring getRoom method from context.js
        let room = getRoom(this.state.slug);    // as a argument we pass slug state and room var get access all data.js
        console.log(room)
        if(!room){                  // if there is not such room according to slug this error message jsx returns
            return <div className='error'>
                <h3>No such room could be found...</h3>
                <Link to={'/room'} className='btn-primary'>Back To Rooms</Link>
            </div>
        }

        const {name, slug, description, price, images, size, capacity,extras,pets, breakfast} = room;  //that's it

    return <div>
                <Hero hero='roomsHero'>
                    <Banner title={`${name} room`}>
                        <Link to={'/room'} className='btn-primary'>back to rooms</Link>
                    </Banner>
                </Hero>
            </div>
    }
   
}
export default SingleRoom;