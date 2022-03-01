import {
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react'
import { Rating } from '@material-ui/lab'
import { Autocomplete } from '@react-google-maps/api'
import React, { Dispatch, SetStateAction } from 'react'
import { BiChevronDown, BiRestaurant, BiSearch, BiStar } from 'react-icons/bi'

type HeaderProps = {
  setType: Dispatch<SetStateAction<any>>
  setRatings: Dispatch<SetStateAction<any>>
  setCoordinates: Dispatch<SetStateAction<any>>
}

const Header = ({ setType, setRatings, setCoordinates }: HeaderProps) => {
  const rate: Array<number> = [2, 3, 4, 5]
  const options: Array<string> = ['restaurants', 'hotels', 'attractions']
  return (
    <Flex
      position="absolute"
      top={0}
      left={0}
      width={'full'}
      px={4}
      py={2}
      zIndex={101}
    >
      <Flex>
        {/* <Autocomplete> */}
        <InputGroup width={'35vw'} shadow="lg">
          <InputRightElement
            pointerEvents={'none'}
            children={<BiSearch color="gray" fontSize={20} />}
          />
          <Input
            type={'text'}
            placeholder="Search Google map..."
            variant="filled"
            fontSize={18}
            bg="white"
            color="gray.700"
            _hover={{ bg: 'whiteAlpha.800' }}
            _focus={{ bg: 'whiteAlpha.800' }}
            _placeholder={{ color: 'gray.700' }}
          />
        </InputGroup>
        {/* </Autocomplete> */}
        <Flex alignItems="center" justifyContent="center">
          <Flex
            alignItems="center"
            justifyContent="center"
            px={4}
            py={2}
            bg="white"
            rounded="full"
            ml={4}
            shadow="lg"
            cursor="pointer"
            _hover={{ bg: 'gray.100' }}
            transition="ease-in-out"
            transitionDuration=".3s"
          >
            <Menu>
              <BiStar fontSize={25} />
              <MenuButton mx={2} transition="all 0.2s" borderRadius="md">
                Choose ratings
              </MenuButton>
              <MenuList>
                <MenuItem
                  display="flex"
                  alignItems="space-around"
                  justifyContent="space-around"
                  onClick={() => setRatings('')}
                >
                  <Text fontSize={20} fontWeight={500} color={'gray.700'}>
                    All Rating
                  </Text>
                </MenuItem>
                {rate.map((star) => (
                  <MenuItem
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    onClick={() => setRatings(star)}
                    key={star}
                  >
                    <Text fontSize={20} fontWeight={500} color={'orange.500'}>
                      {`${star}.0`}
                    </Text>
                    <Rating size="small" value={star} readOnly />
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
            <BiChevronDown fontSize={25} />
          </Flex>
          {options.map((option) => (
            <Flex
              key={option}
              alignItems="center"
              justifyContent="center"
              px={4}
              py={2}
              bg="white"
              rounded="full"
              ml={4}
              shadow="lg"
              cursor="pointer"
              _hover={{ bg: 'gray.100' }}
              transition="ease-in-out"
              transitionDuration=".3s"
              onClick={() => setType(option)}
            >
              <BiRestaurant fontSize={25} />
              <Text ml={3} fontSize={16} fontWeight={500}>
                {option}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Header
