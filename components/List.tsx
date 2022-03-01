import { Box, Flex, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import React from 'react'
import PlaceDetail from './PlaceDetail'

type ListProps = {
  places: Array<{ name: string }>
  isLoading: boolean
}

const List = ({ places, isLoading }: ListProps) => {
  const loadSkeletonNumber: Array<number> = [1, 2, 3, 4]
  if (isLoading)
    return (
      <Flex
        direction="column"
        bg="whiteAlpha.900"
        width={'37vw'}
        position="absolute"
        left="0"
        height="100vh"
        top="0"
        zIndex="1"
        overflow="hidden"
        px={2}
      >
        {loadSkeletonNumber.map((skeleton) => (
          <Box key={skeleton} padding="6" boxShadow="lg" bg="white" mt={3}>
            <SkeletonCircle size="10" />
            <SkeletonText mt="4" noOfLines={4} spacing="4" />
          </Box>
        ))}
      </Flex>
    )
  return (
    <Flex
      direction="column"
      bg="whiteAlpha.900"
      width={'37vw'}
      position="absolute"
      left="0"
      height="100vh"
      top="0"
      zIndex="1"
      overflow="hidden"
      px={2}
    >
      <Flex flex="1" overflowY="scroll" mt={16} direction="column">
        {places &&
          places.map((place, index) => (
            <PlaceDetail place={place} key={index} />
          ))}
      </Flex>
    </Flex>
  )
}

export default List
