import type { NextPage } from 'next'
import { Heading, Image, Box, List } from '@chakra-ui/react'
import { StyledListItem, StyledText } from '../../utils/styledChakraComponents'
const RelocationEn: NextPage = () => {
  return (
    <>
      <Box mt="1em">
        <Image
          src="/ijuu-no-otetsudai.jpg"
          alt="Help with relocating to Japan"
        />
      </Box>
      <List.Root mt="2em">
        <StyledListItem>
          Help finding information before moving
          <br />I will help with house hunting, and find information about
          schools, neighborhood associations, hospitals, etc. I will find
          information about anything you are interested in. I can actually go to
          the places and talk to the people there.
        </StyledListItem>
        <StyledListItem>
          Help with the relocating procedure
          <br />I will support any paperwork you need to do at the city hall,
          the bank, the immigration bureau, etc.
        </StyledListItem>
        <StyledListItem>
          Play a mediator role between the local community and you
          <br />I will help you adapt to the local community. For example, I can
          talk to the school teachers and the neighbors.
        </StyledListItem>
        <StyledListItem>
          Help with the moving
          <br />I will help unpacking, take care of the children, go shopping
          for you, etc.
        </StyledListItem>
      </List.Root>
      <StyledText mt="2em">
        Basically, I will be able to handle any affairs within Fukuoka
        Prefecture, but I would be happy to support you even outside of Fukuoka
        too, if there is anything I can do by only using a phone or the
        internet.
      </StyledText>
      <Heading as="h3" size="4xl" mt="2em">
        Who could find this service useful?
      </Heading>
      <List.Root mt="2em">
        <StyledListItem>
          Someone who wants to get more detailed information about the area, or
          just know how things are here before relocating
        </StyledListItem>
        <StyledListItem>
          Someone who would like some help with relocating because of not
          knowing what to do
        </StyledListItem>
        <StyledListItem>
          Japanese companies which need support for their foreign workers to
          start living in Fukuoka or Itoshima comfortably
        </StyledListItem>
        <StyledListItem>
          Someone who needs Japanese support because of not understanding the
          language very well (English and Spanish available)
        </StyledListItem>
        <StyledListItem>
          Someone who needs help because of having little children
        </StyledListItem>
      </List.Root>
    </>
  )
}

export default RelocationEn
