import type { NextPage } from 'next'
import { Heading, Image, UnorderedList, Box } from '@chakra-ui/react'
import { StyledListItem, StyledText } from '../../utils/styledChakraComponents'
const RelocationEs: NextPage = () => {
  return (
    <>
      <Box mt="1em">
        <Image src="/travel.jpg" alt="旅行のお手伝い" />
      </Box>

      <Heading as="h3" size="lg" mt="2em">
        Buscar billetes de avión
      </Heading>
      <UnorderedList mt="2em">
        <StyledListItem>
          Te propongo los mejores billetes para tu viaje.
        </StyledListItem>
      </UnorderedList>
      <Heading as="h3" size="lg" mt="2em">
        Elaborar itinerarios
      </Heading>
      <UnorderedList mt="2em">
        <StyledListItem>
          Hago planes de viaje para gente que quiere visitar sitios distintos
          que no están incluidos en las rutas típicos, o para gente que quiere
          hacer algo especial.
        </StyledListItem>
      </UnorderedList>
      <Heading as="h3" size="lg" mt="2em">
        Buscar alojamiento
      </Heading>
      <UnorderedList mt="2em">
        <StyledListItem>
          Te propongo el alojamiento más óptimo para tu viaje.
        </StyledListItem>
      </UnorderedList>
      <Heading as="h3" size="lg" mt="2em">
        Acompañar a sitios de Itoshima o Fukuoka
      </Heading>
      <UnorderedList mt="2em">
        <StyledListItem>
          Te acompaño a los sitios que quieras visitar de Itoshima o Fukuoka, y
          puedo ayudarte con idioma. (Disponible en español e inglés.)
        </StyledListItem>
      </UnorderedList>
      <Heading as="h3" size="lg" mt="2em">
        ¿Para quién?
      </Heading>
      <UnorderedList mt="2em">
        <StyledListItem>
          Gente que quiere organizar un viaje individual, pero no tiene tiempo o
          no sabe cómo empezar.
        </StyledListItem>
        <StyledListItem>
          Gente que quiere visitar Fukuoka o Itoshima, pero está preocupada
          porque no sabe mucho japonés. (Disponible en español e inglés.)
        </StyledListItem>
      </UnorderedList>
    </>
  )
}

export default RelocationEs
