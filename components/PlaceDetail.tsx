import { Flex, Image, Text } from '@chakra-ui/react'
import { Rating } from '@material-ui/lab'
import React from 'react'

type PlaceDetailProps = {
  place: any
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
          {/* Ratings */}
          <Flex alignItems="center" width="full">
            <Rating size="small" value={Number(place.rating)} readOnly />
            <Text
              fontSize="sm"
              fontWeight="500"
              color="gray.500"
            >{`(${place.num_reviews})`}</Text>
            <Text fontSize="sm" fontWeight="500" color="gray.500" ml="auto">
              {place.price_level}
            </Text>
          </Flex>

          {/* Ranking */}
          <Text fontSize="sm" fontWeight="500" color="gray.400">
            {place.ranking}
          </Text>

          {/* open status */}
          <Text fontSize="sm" fontWeight="500" color="gray.600">
            {place.open_now_text}
          </Text>
        </Flex>
        <Image
          objectFit="cover"
          width="120px"
          height="120px"
          rounded="lg"
          src={
            place.photo
              ? place.photo.images.large.url
              : 'https://explorelompoc.com/wp-content/uploads/2021/06/food_placeholder.jpg'
          }
        />
      </Flex>
    </Flex>
  )
}

export default PlaceDetail
