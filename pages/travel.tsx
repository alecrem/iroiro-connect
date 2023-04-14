import type { NextPage } from 'next'
import { Heading } from '@chakra-ui/react'
import useTranslation from 'next-translate/useTranslation'
import Layout from '../components/Layout'
import { TravelJa, TravelEs, TravelEn } from '../components/Travel/'

const Travel: NextPage = () => {
  const { t, lang } = useTranslation('common')
  return (
    <Layout>
      <Heading as="h2" mt="2em">
        {t('travel.title')}
      </Heading>
      {lang === 'ja' && <TravelJa />}
      {lang === 'es' && <TravelEs />}
      {lang === 'en' && <TravelEn />}
    </Layout>
  )
}

export default Travel
