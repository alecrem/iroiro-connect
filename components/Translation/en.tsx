import type { NextPage } from 'next'
import { Heading, Image, List, Box } from '@chakra-ui/react'
import { StyledListItem, StyledText } from '../../utils/styledChakraComponents'
const RelocationEn: NextPage = () => {
  return (
    <>
      <Box mt="1em">
        <Image src="/family.jpg" alt="Cremadeskaijo family" />
      </Box>

      <List.Root mt="2em">
        <StyledListItem>English ⇔ Japanese</StyledListItem>
        <StyledListItem>Spanish ⇔ Japanese</StyledListItem>
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
          Japanese restaurants or any kind of establishments which need to have
          a menu or indications ready in English or Spanish to welcome foreign
          customers.
        </StyledListItem>
        <StyledListItem>
          Japanese companies which would be hiring a foreign worker, and need
          support writing employment contracts, or filing visa applications.
        </StyledListItem>
        <StyledListItem>
          Companies or individuals who would need an interpreter during a
          meeting, lunch or dinner.
        </StyledListItem>
        <StyledListItem>
          Companies or individuals who would like to ask someone to take over
          communication in English or Spanish through email.
        </StyledListItem>
        <StyledListItem>
          Someone who would like someone to accompany them to hospitals or
          schools because of not understanding Japanese very well.・Someone who
          relocated to Itoshima or Fukuoka, and wishes to communicate more with
          local residents but doesn’t know where to start.
        </StyledListItem>
        <StyledListItem>
          Someone who relocated to Itoshima or Fukuoka, and wishes to
          communicate more with local residents but doesn’t know where to start.
        </StyledListItem>
      </List.Root>
    </>
  )
}

export default RelocationEn
