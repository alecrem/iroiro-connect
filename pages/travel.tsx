import type { NextPage } from 'next'
import { Heading } from '@chakra-ui/react'
import useTranslation from 'next-translate/useTranslation'
import Layout from '../components/Layout'
import Contact from '../components/Contact'
import { TravelJa, TravelEs, TravelEn } from '../components/Travel/'

const Travel: NextPage = () => {
  const { t, lang } = useTranslation('common')
  return (
    <Layout
      title={
        t('header.nav.travel') +
        ' | ' +
        t('header.title') +
        ' - ' +
        t('header.tagline')
      }
    >
      <Heading as="h2" mt="2em" size="5xl">
        {t('travel.title')}
      </Heading>
      {lang === 'ja' && <TravelJa />}
      {lang === 'es' && <TravelEs />}
      {lang === 'en' && <TravelEn />}
      <Contact />
    </Layout>
  )
}

export default Travel
