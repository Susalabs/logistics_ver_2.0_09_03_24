import React from 'react'
import { useParams } from 'react-router-dom';

export default function TransportersHome() {

    const {id} = useParams()
  return (
    <div>
          <h1>transporters/home/{ id }</h1>
    </div>
  );
}
