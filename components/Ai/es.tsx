import type { NextPage } from 'next'
import { Heading, Image, List, Box } from '@chakra-ui/react'
import { StyledListItem, StyledText } from '../../utils/styledChakraComponents'
const AiEs: NextPage = () => {
  return (
    <>
      <Box mt="1em">
        <Image src="/aikaijo.jpg" alt="Ai Cremades Kaijo" />
      </Box>
      <StyledText mt="2em">
        ¡Hola! Soy Ai Cremades Kaijo. Vivo en Itoshima, Fukuoka, Japón con mi
        marido español y mis dos hijos.
        <br />
        Voy a contaros un poco de mi vida para que entendáis mejor por qué he
        empezado este proyecto “iroiro connect”.
      </StyledText>
      <StyledText mt="2em">
        Viví en Estados Unidos cuando era estudiante de secundaria. Al principio
        no sabia nada de inglés y fue un momento muy duro para mí. Con esta
        experiencia aprendí que lo importante es la intención de comunicarte y
        de entender a la gente aunque no hables bien el idioma. Y entonces
        empecé a disfrutar de conocer gente nueva y de aprender culturas
        diferentes. Así fui a vivir a España también después de trabajar unos
        años y ¡conocí a mi marido!
      </StyledText>
      <StyledText mt="2em">
        Hasta el final de 2018 trabajé en una oficina que tiene relación con
        otros países, y disfruté mucho comunicándome con gente de una amplia
        gama de orígenes y culturas. Cada persona es distinta, y por eso es muy
        interesante conocer gente nueva.
      </StyledText>
      <StyledText mt="2em">
        Últimamente mucha gente viene a Japón para hacer turismo, pero es un
        poco difícil viajar fuera de las ciudades si no sabes mucho japonés. Por
        eso a Itoshima, donde vivo yo, vienen muchos turistas japoneses; pero
        casi no vienen turistas extranjeros, aunque es muy bonito y hay muchas
        cosas interesantes. Creo que en el campo se pueden encontrar muchas
        cosas buenas de Japón, cosas muy japonesas de verdad. Quiero que venga
        mucha gente a Itoshima y a Fukuoka para vivir o viajar, y por eso quería
        hacer algo. Si viviera más gente de muchos países distintos con trabajos
        distintos, me parecería muy divertido y muy bueno para los niños.
      </StyledText>
      <StyledText mt="2em">
        Espero poder ayudar a la gente como persona que habla japonés, español y
        inglés; como persona que se mudó a Itoshima con su familia, como madre…
      </StyledText>

      <Heading as="h3" size="lg" mt="2em">
        Nombre: Ai Cremades Kaijo
      </Heading>
      <StyledText mt="2em">
        <b>Nacionalidad:</b> japonesa
      </StyledText>
      <StyledText mt="2em">
        <b>Residencia:</b> Itoshima, Fukuoka, Japón
      </StyledText>
      <StyledText mt="2em">
        <b>Idiomas:</b> japonés – nativo, español – avanzado, inglés – avanzado
      </StyledText>

      <Heading as="h3" size="lg" mt="2em">
        Educación:
      </Heading>
      <StyledText mt="2em">
        Sep 2004 – Sep 2005 <b>“Enforex Barcelona</b> (Escuela de español)
      </StyledText>
      <StyledText mt="2em">
        Abr 1994 – Mar 1998 <b>“Kobe City University of Foreign Studies”</b>
      </StyledText>

      <Heading as="h3" size="lg" mt="2em">
        Certificaciones:
      </Heading>
      <List.Root mt="2em">
        <StyledListItem>TOEIC 810 (2002)</StyledListItem>
        <StyledListItem>
          Diploma de Instructor Adjunto de Koto (instrumento tradicional
          japonés) (1992)
        </StyledListItem>
        <StyledListItem>
          EIKEN Test in Practical English Proficiency Grade Pre-1 (1992)
        </StyledListItem>
      </List.Root>

      <Heading as="h3" size="lg" mt="2em">
        Experiencia profesional:
      </Heading>
      <StyledText mt="2em">
        2019 – Actualidad
        <br />
        <b>“iroiro connect”</b> (autónoma)
      </StyledText>
      <StyledText mt="2em">
        2006 – 2018
        <br />
        <b>“The Asian-Pacific Children’s Convention in FUKUOKA”</b>
      </StyledText>
      <StyledText mt="2em">
        1999 – 2004
        <br />
        <b>“BRIDGESTONE Hofu Plant”</b>
      </StyledText>
      <StyledText mt="2em">
        1998 – 1999
        <br />
        <b>“SNK Corporation”</b>
      </StyledText>
    </>
  )
}

export default AiEs
