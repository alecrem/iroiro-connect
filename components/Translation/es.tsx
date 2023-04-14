import type { NextPage } from 'next'
import { Heading, Image, UnorderedList, Box } from '@chakra-ui/react'
import { StyledListItem, StyledText } from '../../utils/styledChakraComponents'
const RelocationEs: NextPage = () => {
  return (
    <>
      <Box mt="1em">
        <Image src="/family.jpg" alt="Familia Cremades Kaijo" />
      </Box>

      <UnorderedList mt="2em">
        <StyledListItem>Inglés⇔japonés</StyledListItem>
        <StyledListItem>Español⇔japonés</StyledListItem>
      </UnorderedList>
      <StyledText mt="2em">
        Básicamente puedo moverme dentro de la prefectura de Fukuoka, pero
        también puedo ayudar fuera de Fukuoka si es algo que puedo hacer a
        través de internet o el teléfono.
      </StyledText>
      <Heading as="h3" size="lg" mt="2em">
        ¿Para quién?
      </Heading>
      <UnorderedList mt="2em">
        <StyledListItem>
          Para empresas o personas que necesitan un intérprete durante una
          reunión, cena o comida.
        </StyledListItem>
        <StyledListItem>
          Para empresas o personas que necesitan comunicarse en japonés por
          correo electrónico.
        </StyledListItem>
        <StyledListItem>
          Para gente que necesita que la acompañañen a hospitales o escuelas
          para comunicarse en japonés.
        </StyledListItem>
        <StyledListItem>
          Gente que se ha mudado a Itoshima o Fukuoka, y quiere comunicarse con
          sus nuevos vecinos pero no sabe cómo empezar.
        </StyledListItem>
      </UnorderedList>
    </>
  )
}

export default RelocationEs
