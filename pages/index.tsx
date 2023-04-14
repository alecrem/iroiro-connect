import type { NextPage } from 'next'
import { Heading } from '@chakra-ui/react'
import useTranslation from 'next-translate/useTranslation'
import Layout from '../components/Layout'
import {
  RelocationJa,
  RelocationEs,
  RelocationEn
} from '../components/Relocation/'

const Home: NextPage = () => {
  const { t, lang } = useTranslation('common')
  return (
    <Layout>
      <Heading as="h2" mt="2em">
        {t('index.title')}
      </Heading>
      {lang === 'ja' && <RelocationJa />}
      {lang === 'es' && <RelocationEs />}
      {lang === 'en' && <RelocationEn />}
    </Layout>
  )
}

export default Home
