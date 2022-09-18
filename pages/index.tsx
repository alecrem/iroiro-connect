import type { NextPage } from 'next'
import { Container, Heading } from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <Container maxW="container.lg" mt="2em">
      <Heading>iroiro connect</Heading>
      <Heading size="xs">
        人もいろいろ、必要とすることもいろいろ。個人個人を大切に思い、それぞれに必要とされるサービスを提供します。{' '}
      </Heading>
    </Container>
  )
}

export default Home
