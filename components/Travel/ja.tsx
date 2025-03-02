import type { NextPage } from 'next'
import { Heading, Image, List, Box } from '@chakra-ui/react'
import { StyledListItem } from '../../utils/styledChakraComponents'
const TravelJa: NextPage = () => {
  return (
    <>
      <Box mt="1em">
        <Image src="/travel.jpg" alt="旅行のお手伝い" />
      </Box>

      <Heading as="h3" size="4xl" mt="2em">
        航空券探し
      </Heading>
      <List.Root mt="2em">
        <StyledListItem>
          ご希望に応じた航空券を探し、提案します。
        </StyledListItem>
      </List.Root>
      <Heading as="h3" size="4xl" mt="2em">
        旅程作成
      </Heading>
      <List.Root mt="2em">
        <StyledListItem>
          通常のツアーにはない、ココに行きたい、コレがしたい、というご希望に応じてプランを作成します。
        </StyledListItem>
      </List.Root>
      <Heading as="h3" size="4xl" mt="2em">
        宿探し
      </Heading>
      <List.Root mt="2em">
        <StyledListItem>ご希望に応じた宿を探し、提案します。</StyledListItem>
      </List.Root>
      <Heading as="h3" size="4xl" mt="2em">
        糸島（福岡）案内
      </Heading>
      <List.Root mt="2em">
        <StyledListItem>
          ご希望の場所に同行します。（英語、スペイン語可）
        </StyledListItem>
      </List.Root>
      <Heading as="h3" size="4xl" mt="2em">
        どんな人に向けたサービス？
      </Heading>
      <List.Root mt="2em">
        <StyledListItem>
          個人旅行を計画したいが、時間やノウハウがない方
        </StyledListItem>
        <StyledListItem>
          日本の中でも福岡、糸島へ行ってみたいが、日本語があまり得意ではなく不安な方（英語、スペイン語可）
        </StyledListItem>
      </List.Root>
    </>
  )
}

export default TravelJa
