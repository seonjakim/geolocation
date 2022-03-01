import { Flex } from '@chakra-ui/react'
import React from 'react'
import type { NextPage } from 'next'
import Header from '../components/Header'
import List from '../components/List'
import Map from '../components/Map'
import PlaceDetail from '../components/PlaceDetail'

const places = [
  {
    name: 'sample place',
  },
  {
    name: 'sample place',
  },
  {
    name: 'sample place',
  },
  {
    name: 'sample place',
  },
  {
    name: 'sample place',
  },
]

const Home: NextPage = () => {
  const [coordinates, setCoordinates] = React.useState({ lat: 0, lng: 0 })
  const [type, setType] = React.useState('restaurants')
  const [ratings, setRatings] = React.useState()
  const [isLoading, setIsLoading] = React.useState(false)

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
      <Map coordinates={coordinates} setCoordinates={setCoordinates} />
    </Flex>
  )
}

export default Home
//https://www.youtube.com/watch?v=655FcX4SesQ&ab_channel=VetrivelRavi
