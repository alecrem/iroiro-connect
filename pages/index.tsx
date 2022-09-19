import type { NextPage } from 'next'
import {
  Container,
  Heading,
  Image,
  HStack,
  VStack,
  UnorderedList,
  ListItem,
  Text,
  Box
} from '@chakra-ui/react'

const Home: NextPage = () => {
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
        移住のお手伝い
      </Heading>
      <Box mt="1em">
        <Image src="ijuu-no-otetsudai.jpg" alt="移住のお手伝い" />
      </Box>
      <UnorderedList mt="2em">
        <ListItem>
          事前調査
          <br />
          家探し、学校、自治会、病院のことなど気になることを調査します。
          必要であれば実際に足を運んで調べます。
        </ListItem>
        <ListItem>
          手続き関係 サポート
          <br />
          市役所、銀行、入国管理局での手続きなどに同行し、手続きのサポートをします。
        </ListItem>
        <ListItem>
          地域との仲介役
          <br />
          移住先の地域、学校や自治会の方たちとの間に入り、地域になじめるようサポートします。
        </ListItem>
        <ListItem>
          引っ越しのお手伝い <br />
          荷ほどきや子守り、買い物など、手が足りない部分をサポートします。
        </ListItem>
      </UnorderedList>
      <Heading as="h3" size="md" mt="2em">
        どんな人へ向けたサービス？
      </Heading>
      <UnorderedList mt="2em">
        <ListItem>移住前により詳細な情報、実情を知りたい方</ListItem>
        <ListItem>
          いろいろよくわからないので、誰か一緒に手伝ってほしい方
        </ListItem>
        <ListItem>
          外国から従業員を雇う際、仕事以外の部分をサポートしてほしい企業の方
        </ListItem>
        <ListItem>
          日本語があまり得意でなく、言葉のサポートが必要な方（英語、スペイン語可）
        </ListItem>
        <ListItem>小さい子供がいるので何かと手を借りたい方</ListItem>
        <ListItem>
          もっと地域の方と触れ合いたいけど、誰にどう聞いていいか分からない移住者の方
        </ListItem>
      </UnorderedList>
      <Text mt="2em">
        何か気になること（サービスや価格のことなど、なんでも）がありましたら、お気軽にお問合せください。
      </Text>
    </Container>
  )
}

export default Home
