import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

type PlaceDetailProps = {
  place: { name: string; price: string }
}

const PlaceDetail = ({ place }: PlaceDetailProps) => {
  return (
    <Flex
      bg="whiteAlpha.900"
      px={4}
      py={2}
      mb={2}
      shadow="lg"
      direction="column"
      alignItems="center"
      justifyContent="space-between"
    >
      <Flex justifyContent="space-between" width="full">
        <Flex
          direction="column"
          justifyContent="start"
          alignItems="start"
          width="full"
          px={2}
        >
          <Flex alignItems="center" width="full" justifyContent="space-between">
            <Text
              textTransform="capitalize"
              width="40"
              isTruncated
              fontSize="lg"
              fontWeight="500"
            >
              {place.name}
            </Text>
            <Text fontSize="sm" fontWeight="500" color="gray.500">
              {place.price}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default PlaceDetail
