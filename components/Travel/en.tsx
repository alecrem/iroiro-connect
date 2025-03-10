import type { NextPage } from 'next'
import { Heading, Image, List, Box } from '@chakra-ui/react'
import { StyledListItem, StyledText } from '../../utils/styledChakraComponents'
const RelocationEn: NextPage = () => {
  return (
    <>
      <Box mt="1em">
        <Image src="/travel.jpg" alt="Help organizing travel" />
      </Box>

      <Heading as="h3" size="4xl" mt="2em">
        Find airline tickets
      </Heading>
      <List.Root mt="2em">
        <StyledListItem>
          I will propose the best flights that meet your request.
        </StyledListItem>
      </List.Root>
      <Heading as="h3" size="4xl" mt="2em">
        Plan an itinerary
      </Heading>
      <List.Root mt="2em">
        <StyledListItem>
          I will make a travel plan for those who wish to visit places which are
          not typically included in tours, or those who wish to experience
          something different.
        </StyledListItem>
      </List.Root>
      <Heading as="h3" size="4xl" mt="2em">
        Find accommodation
      </Heading>
      <List.Root mt="2em">
        <StyledListItem>
          I will propose the best accommodation that meets your request.
        </StyledListItem>
      </List.Root>
      <Heading as="h3" size="4xl" mt="2em">
        Accompany you to places in Itoshima or Fukuoka
      </Heading>
      <List.Root mt="2em">
        <StyledListItem>
          I will go with you to any places you’d like to visit in Itoshima or
          Fukuoka and provide language support. (English and Spanish available.)
        </StyledListItem>
      </List.Root>
      <Heading as="h3" size="4xl" mt="2em">
        Who could find this service useful?
      </Heading>
      <List.Root mt="2em">
        <StyledListItem>
          Someone who would like to make an individual travel plan, but doesn’t
          have much time or doesn’t know where to start.
        </StyledListItem>
        <StyledListItem>
          Someone who would like to visit Fukuoka or Itoshima, but is worried
          because of not understanding Japanese very well. (English and Spanish
          available.)
        </StyledListItem>
      </List.Root>
    </>
  )
}

export default RelocationEn
