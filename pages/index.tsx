import type { NextPage } from 'next'
import { Heading, Image, UnorderedList, Box } from '@chakra-ui/react'
import useTranslation from 'next-translate/useTranslation'
import { StyledListItem, StyledText } from '../utils/styledChakraComponents'
import Layout from '../components/Layout'

const Home: NextPage = () => {
  const { t, lang } = useTranslation('common')
  return (
    <Layout>
      <Heading as="h2" mt="2em">
        {t('index.title')}
      </Heading>
      <Box mt="1em">
        <Image src="/ijuu-no-otetsudai.jpg" alt="移住のお手伝い" />
      </Box>
      <UnorderedList mt="2em">
        <StyledListItem>
          事前調査
          <br />
          家探し、学校、自治会、病院のことなど気になることを調査します。
          必要であれば実際に足を運んで調べます。
        </StyledListItem>
        <StyledListItem>
          手続き関係 サポート
          <br />
          市役所、銀行、入国管理局での手続きなどに同行し、手続きのサポートをします。
        </StyledListItem>
        <StyledListItem>
          地域との仲介役
          <br />
          移住先の地域、学校や自治会の方たちとの間に入り、地域になじめるようサポートします。
        </StyledListItem>
        <StyledListItem>
          引っ越しのお手伝い <br />
          荷ほどきや子守り、買い物など、手が足りない部分をサポートします。
        </StyledListItem>
      </UnorderedList>
      <Heading as="h3" size="lg" mt="2em">
        どんな人へ向けたサービス？
      </Heading>
      <UnorderedList mt="2em">
        <StyledListItem>
          移住前により詳細な情報、実情を知りたい方
        </StyledListItem>
        <StyledListItem>
          いろいろよくわからないので、誰か一緒に手伝ってほしい方
        </StyledListItem>
        <StyledListItem>
          外国から従業員を雇う際、仕事以外の部分をサポートしてほしい企業の方
        </StyledListItem>
        <StyledListItem>
          日本語があまり得意でなく、言葉のサポートが必要な方（英語、スペイン語可）
        </StyledListItem>
        <StyledListItem>
          小さい子供がいるので何かと手を借りたい方
        </StyledListItem>
        <StyledListItem>
          もっと地域の方と触れ合いたいけど、誰にどう聞いていいか分からない移住者の方
        </StyledListItem>
      </UnorderedList>
      <StyledText mt="2em">
        何か気になること（サービスや価格のことなど、なんでも）がありましたら、お気軽にお問合せください。
      </StyledText>
    </Layout>
  )
}

export default Home
