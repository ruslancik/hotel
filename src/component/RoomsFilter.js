import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from './Title';

const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value] ))];   // getting unique value
}

export default function RoomsFilter({rooms}) {
  const context = useContext(RoomContext);
  // console.log(context);

  const {
    handleChange,
    type,
    capacity,
    price,
    maxPrice,
    minPrice,
    maxSize,
    minSize,
    pets,
    breakfast
  } = context;

let types = getUnique(rooms, 'type');  //calling function adding rooms prop as a argument
types = ['all', ...types];  //adding all to types array

types = types.map((item, index) => {
    return <option value={item} key={index} >{item}</option>  // mapping array and returning options tag
})

  return (
    <section className="filter-container">
      <Title title={"Search Rooms"} />
      <form action="#" className="filter-form">
          {/* selecting type*/}
          <div className="form-group">
              <label htmlFor="type">Room type</label>
              <select type="text" name="type" id="type" className="form-control" onChange={handleChange}>
                {types}  {/* using types here*/}
              </select>
          </div>
      </form>
    </section>
  );
}
