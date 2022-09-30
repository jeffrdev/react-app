import React from 'react'

export default function Item({ item }) {
	return (
		<li>{ item.id +' - '+ item.title +' - '+ item.avaliable }</li>
  )
}
