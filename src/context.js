import React, { Component } from "react";
import items from "./data";

const RoomContext = React.createContext();

class RoomProvider extends Component {
  state = {
    rooms: [],
    featuredRooms: [],
    sortedRooms: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false
  };

  componentDidMount() {
    let rooms = this.formatData(items);
    let featuredRooms = rooms.filter(room => room.featured === true); // filtered featured rooms
    let maxPrice = Math.max(...rooms.map(item => item.price)); // take max price of rooms according to our data.js
    let maxSize = Math.max(...rooms.map(item => item.size)); //take max size of rooms according to our data.js
    this.setState({
      // update the state
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
      price: maxPrice,
      maxPrice,
      maxSize
    });
  }

  handleChange = event => {
    const target = event.target;
    const value = event.name === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
        [name] : value
    }, this.filterRooms);
  };

  filterRooms = () => {
    let {
        rooms,
        type,
        price,
        breakfast,
        pets,
        capacity,
        minSize,
        maxSize
    } = this.state;

    let tempRooms = [...rooms];
    if(type !== 'all') {
        tempRooms = tempRooms.filter(room => room.type === type );  // filter room types
    }

    this.setState({sortedRooms : tempRooms});  // update the state according to selected types
 
};

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id; // get IDs
      let images = item.fields.images.map(image => image.fields.file.url); // get direct Image URLs
      let room = { ...item.fields, images, id }; // add all of them into new Object and return it
      return room;
    });
    return tempItems;
  }

  getRoom = slug => {
    const tempRoom = [...this.state.rooms];

    let room = tempRoom.find(room => room.slug === slug);
    return room;
  };

  render() {
    return (
      <div>
        <RoomContext.Provider
          value={{
            ...this.state,
            getRoom: this.getRoom,
            handleChange: this.handleChange
          }}
        >
          {this.props.children}
        </RoomContext.Provider>
      </div>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

// you can use RoomConsumer alone our HOC like this
export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {value => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
}

export { RoomConsumer, RoomContext, RoomProvider };
