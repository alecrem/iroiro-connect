import type { NextPage } from 'next'
import {
  Container,
  Heading,
  Image,
  HStack,
  VStack,
  UnorderedList,
  Box
} from '@chakra-ui/react'
import { StyledListItem, StyledText } from '../utils/styledChakraComponents'

const Travel: NextPage = () => {
  return (
    <Container maxW="container.lg" mt="2em" mb="4em">
      <HStack spacing="24px">
        <Image
          src="cropped-iroiro-puzzle.png"
          alt="iroiro connect logo"
          htmlHeight={'64'}
          htmlWidth={'64'}
        />
        <VStack alignItems="left">
          <Heading as="h1">iroiro connect</Heading>
          <Heading as="h4" size="xs">
            人もいろいろ、必要とすることもいろいろ。個人個人を大切に思い、それぞれに必要とされるサービスを提供します。
          </Heading>
        </VStack>
      </HStack>
      <Heading as="h2" mt="2em">
        旅行のお手伝い
      </Heading>
      <Box mt="1em">
        <Image src="travel.jpg" alt="旅行のお手伝い" />
      </Box>

      <Heading as="h3" size="lg" mt="2em">
        航空券探し
      </Heading>
      <UnorderedList mt="2em">
        <StyledListItem>
          ご希望に応じた航空券を探し、提案します。
        </StyledListItem>
      </UnorderedList>
      <Heading as="h3" size="lg" mt="2em">
        旅程作成
      </Heading>
      <UnorderedList mt="2em">
        <StyledListItem>
          通常のツアーにはない、ココに行きたい、コレがしたい、というご希望に応じてプランを作成します。
        </StyledListItem>
      </UnorderedList>
      <Heading as="h3" size="lg" mt="2em">
        宿探し
      </Heading>
      <UnorderedList mt="2em">
        <StyledListItem>ご希望に応じた宿を探し、提案します。</StyledListItem>
      </UnorderedList>
      <Heading as="h3" size="lg" mt="2em">
        糸島（福岡）案内
      </Heading>
      <UnorderedList mt="2em">
        <StyledListItem>
          ご希望の場所に同行します。（英語、スペイン語可）
        </StyledListItem>
      </UnorderedList>
      <Heading as="h3" size="lg" mt="2em">
        どんな人に向けたサービス？
      </Heading>
      <UnorderedList mt="2em">
        <StyledListItem>
          個人旅行を計画したいが、時間やノウハウがない方
        </StyledListItem>
        <StyledListItem>
          日本の中でも福岡、糸島へ行ってみたいが、日本語があまり得意ではなく不安な方（英語、スペイン語可）
        </StyledListItem>
      </UnorderedList>
    </Container>
  )
}

export default Travel
