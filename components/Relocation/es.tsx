import type { NextPage } from 'next'
import { Heading, Image, UnorderedList, Box } from '@chakra-ui/react'
import { StyledListItem, StyledText } from '../../utils/styledChakraComponents'
const RelocationEs: NextPage = () => {
  return (
    <>
      <Box mt="1em">
        <Image src="/ijuu-no-otetsudai.jpg" alt="移住のお手伝い" />
      </Box>
      <UnorderedList mt="2em">
        <StyledListItem>
          Buscar información antes de la mudanza
          <br />
          Busco información sobre casas o pisos, escuelas, asociaciones de
          vecinos, hospitales, etc. Intento encontrar la información que
          necesitas. Voy al sitio y hablo con la gente si es necesario.
        </StyledListItem>
        <StyledListItem>
          Ayudo con documentos relacionados con la mudanza
          <br />
          Te acompaño al ayuntamiento, al banco, a la oficina de inmigración,
          etc. para ayudarte con los documentos.
        </StyledListItem>
        <StyledListItem>
          Actúo como mediadora con la comunidad local
          <br />
          Te ayudo a adaptarte a tu nuevo entorno. Por ejemplo, puedo hablar con
          los profesores del colegio y los vecinos para fomentar el
          entendimiento mutuo.
        </StyledListItem>
        <StyledListItem>
          Ayudo con la mudanza
          <br />
          Te ayudo a desempacar, a cuidar los niños, a hacer la compra, etc.
        </StyledListItem>
      </UnorderedList>
      <StyledText mt="2em">
        Básicamente puedo moverme dentro de la prefectura de Fukuoka, pero
        también puedo ayudar fuera de Fukuoka si es algo que puedo hacer a
        través de internet o el teléfono.
      </StyledText>
      <Heading as="h3" size="lg" mt="2em">
        ¿Para quién es este servicio?
      </Heading>
      <UnorderedList mt="2em">
        <StyledListItem>
          Gente que quiere tener más información o saber cómo son las cosas en
          el sitio antes de mudarse.
        </StyledListItem>
        <StyledListItem>
          Gente que quiere ayuda porque no sabe exactamente qué hay que hacer.
        </StyledListItem>
        <StyledListItem>
          Empresas japonesas que necesitan ayuda para que sus empleados
          extranjeros vivan en Japón de forma más cómoda.
        </StyledListItem>
        <StyledListItem>
          Gente que necesita ayuda en japonés porque no entiende el idioma muy
          bien. (Disponible en español e inglés.)
        </StyledListItem>
        <StyledListItem>
          Gente que necesita ayuda porque tiene niños pequeños.
        </StyledListItem>
      </UnorderedList>
    </>
  )
}

export default RelocationEs
