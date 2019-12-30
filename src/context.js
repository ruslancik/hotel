import React, { Component } from 'react'
import items from './data'

const RoomContext = React.createContext();

class RoomProvider extends Component {
    state = {
        rooms: [],
        featuredRooms : [],
        sortedRooms: [],
        loading: true
    };

    componentDidMount(){
        let rooms = this.formatData(items);
        let featuredRooms = rooms.filter(room => room.featured === true); // filtered featured rooms
        this.setState({     // update the state
            rooms,
            featuredRooms,
            sortedRooms: rooms,
            loading: false
        })
    }

    formatData (items) {
        let tempItems = items.map(item => {
            let id = item.sys.id;           // get IDs
            let images = item.fields.images.map(image => image.fields.file.url); // get direct Image URLs
            let room = { ...item.fields, images, id}; // add all of them into new Object and return it
            return room;
        })
        return tempItems; 
    }

    getRoom =  (slug) => {
        const tempRoom = [...this.state.rooms];

        let room = tempRoom.find(room => room.slug === slug)
        return room;
    }
    
    render() {
        return (
            <div>
                <RoomContext.Provider value={{...this.state, getRoom : this.getRoom}}>
                    {this.props.children}
                </RoomContext.Provider>
            </div>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

export {RoomConsumer, RoomContext, RoomProvider};