import React from 'react'
import defaultBcg from '../images/room-2.jpeg'
//import Hero from '.././component/Hero'
import Banner from '.././component/Banner'
import {Link} from 'react-router-dom'
import {RoomContext} from '../context'
import StyledHero from '../component/StyledHero'

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

        const {name, description, price, images, size, capacity,extras,pets, breakfast} = room;  //that's it

    return <div>
            <>
                <StyledHero img = {images[0]}>
                    <Banner title={`${name} room`}>
                        <Link to={'/room'} className='btn-primary'>back to rooms</Link>
                    </Banner>
                </StyledHero>
                <section className="single-room">
                    <div className="single-room-images">
                        {images.map( (item,index) => {
                            return <img src={item} alt={name} key={index} />
                        })}
                    </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>Details</h3>
                            <p>{description}</p>
                        </article>
                        <article className="info">
                            <h3>Info</h3>
                            <h6>price : ${price}</h6>
                            <h6>size : {size} SQFT</h6>
                            <h6> Max Capacity : {capacity > 1 ?  `${capacity} people` : `${capacity} person`}</h6>
                            <h6> Pets : { pets ? "pets allowed" : "pets not allowed"}</h6>
                            <h6> Breakfast :  { breakfast ? "Included" : "not included"}</h6>
                        </article>
                    </div>
                </section>
                <section className="room-extras">
                    <h6>Extras</h6>
                    <ul className="extras">
                        {extras.map((item,index) => {
                        return <li key={index}>{item}</li>
                        })}
                    </ul>
                </section>
            </>
            </div>
    }
   
}
export default SingleRoom;