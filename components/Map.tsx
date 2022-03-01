import { Box } from '@chakra-ui/react'
import React, { Dispatch, SetStateAction } from 'react'
import GoogleMapReact from 'google-map-react'

type MapProps = {
  coordinates: { lat: number; lng: number }
  setCoordinates: Dispatch<SetStateAction<any>>
  setBounds: Dispatch<SetStateAction<any>>
}
const Map = ({ coordinates, setCoordinates, setBounds }: MapProps) => {
  return (
    <Box width="full" height="full">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.GOOGLE_MAP_API_KEY }}
        center={coordinates}
        defaultZoom={10}
        margin={[50, 50]}
        option={''}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng })
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
        }}
        onChildClick={() => {}}
      ></GoogleMapReact>
    </Box>
  )
}

export default Map
