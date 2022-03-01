import { Flex } from '@chakra-ui/react'
import React from 'react'
import type { NextPage } from 'next'
import Header from '../components/Header'
import List from '../components/List'
import Map from '../components/Map'
import PlaceDetail from '../components/PlaceDetail'
import { getPlacesData } from './api'

const Home: NextPage = () => {
  const [places, setPlaces] = React.useState([])
  const [coordinates, setCoordinates] = React.useState({ lat: 0, lng: 0 })
  const [bounds, setBounds] = React.useState(null)
  const [type, setType] = React.useState('restaurants')
  const [ratings, setRatings] = React.useState()
  const [isLoading, setIsLoading] = React.useState(false)

  React.useEffect(() => {
    // get the users current location

    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude })
      }
    )
  }, [coordinates, bounds])

  React.useEffect(() => {
    setIsLoading(true)
    getPlacesData(bounds?.sw, bounds?.ne).then((data) => {
      console.log(data)
      setPlaces(data), setIsLoading(false)
    })
  }, [])

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      width="100vw"
      height="100vh"
      position="relative"
    >
      <Header
        setType={setType}
        setRatings={setRatings}
        setCoordinates={setCoordinates}
      />
      <List places={places} isLoading={isLoading} />
      <Map
        coordinates={coordinates}
        setCoordinates={setCoordinates}
        setBounds={setBounds}
      />
    </Flex>
  )
}

export default Home
//https://www.youtube.com/watch?v=655FcX4SesQ&ab_channel=VetrivelRavi
