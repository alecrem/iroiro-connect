import type { NextPage } from 'next'
import { Heading } from '@chakra-ui/react'
import useTranslation from 'next-translate/useTranslation'
import Layout from '../components/Layout'
import Contact from '../components/Contact'
import {
  RelocationJa,
  RelocationEs,
  RelocationEn
} from '../components/Relocation/'

const Home: NextPage = () => {
  const { t, lang } = useTranslation('common')
  return (
    <Layout title={t('header.title') + ' - ' + t('header.tagline')}>
      <Heading as="h2" mt="2em" size="5xl">
        {t('index.title')}
      </Heading>
      {lang === 'ja' && <RelocationJa />}
      {lang === 'es' && <RelocationEs />}
      {lang === 'en' && <RelocationEn />}
      <Contact />
    </Layout>
  )
}

export default Home
