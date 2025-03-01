import type { NextPage } from 'next'
import { Heading, Image, List, Box } from '@chakra-ui/react'
import { StyledListItem, StyledText } from '../../utils/styledChakraComponents'
const RelocationEs: NextPage = () => {
  return (
    <>
      <Box mt="1em">
        <Image src="/travel.jpg" alt="Ayuda organizando viajes" />
      </Box>

      <Heading as="h3" size="lg" mt="2em">
        Buscar billetes de avión
      </Heading>
      <List.Root mt="2em">
        <StyledListItem>
          Te propongo los mejores billetes para tu viaje.
        </StyledListItem>
      </List.Root>
      <Heading as="h3" size="lg" mt="2em">
        Elaborar itinerarios
      </Heading>
      <List.Root mt="2em">
        <StyledListItem>
          Hago planes de viaje para gente que quiere visitar sitios distintos
          que no están incluidos en las rutas típicos, o para gente que quiere
          hacer algo especial.
        </StyledListItem>
      </List.Root>
      <Heading as="h3" size="lg" mt="2em">
        Buscar alojamiento
      </Heading>
      <List.Root mt="2em">
        <StyledListItem>
          Te propongo el alojamiento más óptimo para tu viaje.
        </StyledListItem>
      </List.Root>
      <Heading as="h3" size="lg" mt="2em">
        Acompañar a sitios de Itoshima o Fukuoka
      </Heading>
      <List.Root mt="2em">
        <StyledListItem>
          Te acompaño a los sitios que quieras visitar de Itoshima o Fukuoka, y
          puedo ayudarte con idioma. (Disponible en español e inglés.)
        </StyledListItem>
      </List.Root>
      <Heading as="h3" size="lg" mt="2em">
        ¿Para quién?
      </Heading>
      <List.Root mt="2em">
        <StyledListItem>
          Gente que quiere organizar un viaje individual, pero no tiene tiempo o
          no sabe cómo empezar.
        </StyledListItem>
        <StyledListItem>
          Gente que quiere visitar Fukuoka o Itoshima, pero está preocupada
          porque no sabe mucho japonés. (Disponible en español e inglés.)
        </StyledListItem>
      </List.Root>
    </>
  )
}

export default RelocationEs
