import type { NextPage } from 'next'
import { Container, Heading, Image, HStack, VStack } from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <Container maxW="container.lg" mt="2em">
      <HStack spacing="24px">
        <Image
          src="cropped-iroiro-puzzle.png"
          alt="iroiro connect logo"
          htmlHeight={'64'}
          htmlWidth={'64'}
        />
        <VStack alignItems="left">
          <Heading>iroiro connect</Heading>
          <Heading size="xs">
            人もいろいろ、必要とすることもいろいろ。個人個人を大切に思い、それぞれに必要とされるサービスを提供します。{' '}
          </Heading>
        </VStack>
      </HStack>
    </Container>
  )
}

export default Home
