import React from 'react'

type PlaceDetailProps = {
  place: { name: string }
}

const PlaceDetail = ({ place }: PlaceDetailProps) => {
  return <div>{place.name}</div>
}

export default PlaceDetail
