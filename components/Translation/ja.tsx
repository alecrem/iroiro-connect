import type { NextPage } from 'next'
import { Heading, Image, List, Box } from '@chakra-ui/react'
import { StyledListItem } from '../../utils/styledChakraComponents'
const TranslationJa: NextPage = () => {
  return (
    <>
      <Box mt="1em">
        <Image src="/family.jpg" alt="クレマデス海上家" />
      </Box>

      <List.Root mt="2em">
        <StyledListItem>英語⇔日本語</StyledListItem>
        <StyledListItem>スペイン語⇔日本語</StyledListItem>
      </List.Root>
      <Heading as="h3" size="lg" mt="2em">
        どんな人に向けたサービス？
      </Heading>
      <List.Root mt="2em">
        <StyledListItem>
          海外からお客さんが来るレストランや施設でメニューなどの英語表記を作りたい方
        </StyledListItem>
        <StyledListItem>
          外国人労働者を受け入れる際の雇用契約書や就労ビザ申請のための書類などの翻訳が必要な企業
        </StyledListItem>
        <StyledListItem>海外のお客さんを交えた会食などの通訳</StyledListItem>
        <StyledListItem>
          {' '}
          英語/スペイン語圏の方とのメール等でのやり取りを依頼したい方{' '}
        </StyledListItem>
        <StyledListItem>
          {' '}
          日本語があまり得意ではないので、病院や学校などの付き添いをお願いしたい方{' '}
        </StyledListItem>
      </List.Root>
    </>
  )
}

export default TranslationJa
