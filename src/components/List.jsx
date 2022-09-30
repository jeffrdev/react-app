import React, { Fragment } from 'react'
import Item from './Item'

export default function List() {

  const items = [
    { id: 1, title: "Los Viajes", avaliable: true },
    { id: 2, title: "Los Trabajos", avaliable: false },
    { id: 3, title: 'Los Tiranos', avaliable: true}
  ]

  return (
    <Fragment>
      <ul>
        {
          items.map((item) => (
            <Item item={item} />
          ))
        }
      </ul>
    </Fragment>
  )
}
