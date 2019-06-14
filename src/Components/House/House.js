import React  from 'react'

export default function House(props){
    let { id, name, address, city, state, zipcode } = props.house
    return (
        <div>
            <p>Property Name: {name}</p>
            <p>Address: {address}</p>
            <p>City: {city}</p>
            <p>State: {state}</p>
            <p>Zip: {zipcode}</p>
            <button onClick={() => props.deleteHouse(id)} >Delete</button>
        </div>
        )
    }