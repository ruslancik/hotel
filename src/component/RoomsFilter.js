import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "./Title";

const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))]; // getting unique value
};

export default function RoomsFilter({ rooms }) {
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

  let types = getUnique(rooms, "type"); //calling function adding rooms prop as a argument
  types = ["all", ...types]; //adding all to types array

  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    ); // mapping array and returning options tag
  });

  let people = getUnique(rooms, "capacity");

  people = people.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  return (
    <section className="filter-container">
      <Title title={"Search Rooms"} />
      <form action="#" className="filter-form">
        {/* selecting type start*/}
        <div className="form-group">
          <label htmlFor="type">Room type</label>
          <select
            type="text"
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* selecting type end*/}

        {/* --------------------------------------------------------*/}

        {/* selecting capacity start*/}
        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select
            type="text"
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {people}
          </select>
        </div>
        {/* selecting capacity end*/}
        {/* --------------------------------------------------------*/}

        {/* selecting price start*/}
        <div className="form-group">
          <label htmlFor="price">Room Price ${price}</label>
          <input
            type="range"
            name="price"
            id="price"
            min={minPrice}
            max={maxPrice}
            value={price}
            className="form-control"
            onChange={handleChange}
          />
        </div>
        {/* selecting price end*/}
        {/* --------------------------------------------------------*/}

        {/* selecting size start*/}
        <div className="form-group">
          <label htmlFor="size">Room size</label>
          <div className="size-inputs">
            <input
              type="number"
              value={minSize}
              name="minSize"
              id="size"
              className="size-input"
              onChange={handleChange}
            />
            <input
              type="number"
              value={maxSize}
              name="maxSize"
              id="size"
              className="size-input"
              onChange={handleChange}
            />
          </div>
        </div>
        {/* selecting size end*/}
        {/* --------------------------------------------------------*/}

        {/* selecting checkbox start*/}

        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              id="breakfast"
              name="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">Breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              id="pets"
              name="pets"
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor="pets">Pets</label>
          </div>
        </div>
        {/* selecting checkbox start*/}
      </form>
    </section>
  );
}
