import type { NextPage } from 'next'
import { Heading } from '@chakra-ui/react'
import useTranslation from 'next-translate/useTranslation'
import Layout from '../components/Layout'
import {
  TranslationJa,
  TranslationEs,
  TranslationEn
} from '../components/Translation/'

const Translation: NextPage = () => {
  const { t, lang } = useTranslation('common')
  return (
    <Layout>
      <Heading as="h2" mt="2em">
        {t('translation.title')}
      </Heading>
      {lang === 'ja' && <TranslationJa />}
      {lang === 'es' && <TranslationEs />}
      {lang === 'en' && <TranslationEn />}
    </Layout>
  )
}

export default Translation
