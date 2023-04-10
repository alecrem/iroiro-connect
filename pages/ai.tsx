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
        iroiro connect クレマデス海上 愛
      </Heading>
      <Box mt="1em">
        <Image src="aikaijo.jpg" alt="クレマデス海上 愛" />
      </Box>
      <StyledText mt="2em">
        iroiro connect（イロイロ コネクト）のクレマデス海上
        愛（くれまですかいじょう
        あい）と申します。少し長くなりますが、私の人となり、そしてなぜiroiro
        connectを立ち上げたのかをご理解いただきたく、私の半生を語らせていただきます。
      </StyledText>
      <StyledText mt="2em">
        山口県防府市という、のどかな田舎で幼少期を過ごし、中学生時代、父親の転勤でアメリカ・テネシー州で2年間過ごしました。今となってはこの経験があり、国際色豊かな今の生活があるのだと感謝しています。ただ当時は、英語を習い始めたばかりの突然の渡米だったので、自分が思うことも言えず、言われたこともわからず、友達もできずで辛い時期もありました。その経験から、言葉の大切さを実感したと同時に、逆に言葉そのもの以上に「伝えたい・理解したい気持ち」が大切だということに気づかされました。{' '}
      </StyledText>
      <StyledText mt="2em">
        地元の防府高等学校を卒業後、神戸市外国語大学というこじんまりとした大学に進学。その後、ゲーム機やゲームソフトの企画・開発・販売を行っていた株式会社エス・エヌ・ケイに入社。海外本部に所属し、主にアメリカと韓国の海外現地法人や現地顧客を相手にゲームソフトの販売・輸出を担当していました。たまに来日する海外からのお客さんをゲームショウに案内したり、一緒にお食事をしたりする業務は緊張しながらもとても楽しい経験でした。
      </StyledText>
      <StyledText mt="2em">
        その後、会社が傾きかけたことをきっかけに転職。地元山口へ戻り、株式会社ブリヂストン防府工場へ入社。工場管理課に配属され、人事・労務・総務メインのお仕事を5年弱させてもらいました。ただ、メインのお仕事より、組合の旅行やお祭りの企画・運営の方が性に合っているのか、やりがいを感じていました。
      </StyledText>
      <StyledText mt="2em">
        その頃、ずっとこのままではいたくないという思いから、スペイン留学を思い立ち、30歳手前でスペインへ飛び出しました。一喜一憂しながらも充実した1年間。のちに旦那さんとなるアレハンドロ氏と出会い、2人でマニアックなバンド活動もしていました。
      </StyledText>
      <StyledText mt="2em">
        帰国後、やりがいを求めて出会った職場が、NPO法人アジア太平洋こども会議・イン福岡。こども国際交流事業を行う団体なのですが、本当にいろいろな仕事をさせてもらいました。アジア太平洋地域にある40以上の海外窓口とやりとりをしたり、数多くのボランティアの方たちと同じ目標に向かい、時には涙しながらも必死に事業に向き合った良い時間でした。さらにNPO法人としての組織運営体制について学ばせてもらったり、事務局の労働環境改善への取組みに励んだりと、責任は大きいものでしたが、自分がやればやるほど結果がついてくる貴重な職場でした。年齢も国籍も超えた様々な人たちとのつながりは一生の財産となり、私のこれからを支えてくれる糧になりました。
      </StyledText>
      <StyledText mt="2em">
        同時にプライベートでは、先ほども登場しましたが、スペイン留学で知り合った日本ツウのアレハンドロ氏と結婚し、自然豊かな糸島の古民家に引っ越し、子供を2人授かりました。そんな中、国内外からの移住者の方たち、特に国際結婚をして、こどもがいる方たちと自然とつながりが広がっていきました。海外に住みながらも日本での生活や子育てに興味のある人たちが多くいることを知りました。そしてこの糸島はのんびりと自然を感じながら、かつ面白いモノや人にも出会える、理想的な環境にあることも改めて実感しました。ただ、移住を決断するのはとても大きなこと。本当に大丈夫なの？ネット上の情報だけでなく、もっと生の声が聴きたいと願う人が多いことを知り、私に何かできないものかと少しずつ考え始めました。そして私自身がいろいろな方と会い、お話することが楽しく、もっともっといろいろな人に移住してきてほしいと強く願うようになりました。子供たちにとっても、いろいろな国、いろいろな職業の人たちが周囲にいるということは、それだけで自然と視野が広がり、将来の選択肢も広がっていくのではと思うようになりました。そのために私ができること。県外から移住してきた者として、外国人の旦那さんを持つ者として、母親として、英語とスペイン語を扱う者として、できること。私の今までの経験や性格をフルに活かしてできるすべてをiroiro
        connectで実現し、いろいろな人のいろいろな希望にお答えしながら、少しでもお役に立ちたいと願っています。移住してくる人も、受け入れる地域の人も、たまたま通りかかった人も、みんなが今よりもうちょっとだけ幸せになるために。
      </StyledText>
      <Heading as="h3" size="lg" mt="2em">
        氏名：クレマデス海上 愛
      </Heading>
      <StyledText mt="2em">居住地：福岡県糸島市 </StyledText>
      <StyledText mt="2em">家族：夫（スペイン人）、子供2人</StyledText>
      <StyledText mt="2em">
        1998年3月 公立大学法人神戸市外国語大学 英米学科 卒業
      </StyledText>
      <StyledText mt="2em">
        1998年4月 – 1999年12月
        株式会社エス・エヌ・ケイ（現・株式会社SNK）海外本部
      </StyledText>
      <StyledText mt="2em">
        1999年12月 – 2004年7月 株式会社ブリヂストン防府工場 工場管理課
      </StyledText>
      <StyledText mt="2em">
        2004年9月 – 2005年9月 スペイン スペイン語学校エンフォレックス 語学留学
      </StyledText>
      <StyledText mt="2em">
        2006年3月 –2019年1月 NPO法人アジア太平洋こども会議・イン福岡
      </StyledText>
      <StyledText mt="2em">
        2019年4月 「iroiro connect」個人事業開業届提出
      </StyledText>
      <Heading as="h3" size="lg" mt="2em">
        保有資格：
      </Heading>
      <UnorderedList mt="2em">
        <StyledListItem>実用英語技能検定 準1級 </StyledListItem>
        <StyledListItem>琴 師範補 </StyledListItem>
        <StyledListItem>TOEIC公開テスト 810点 </StyledListItem>
      </UnorderedList>
    </Container>
  )
}

export default Home
