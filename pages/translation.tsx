import { Heading } from '@chakra-ui/react'
import type { NextPage } from 'next'
import useTranslation from 'next-translate/useTranslation'
import Contact from '../components/Contact'
import Layout from '../components/Layout'
import {
  TranslationEn,
  TranslationEs,
  TranslationJa
} from '../components/Translation/'

const Translation: NextPage = () => {
  const { t, lang } = useTranslation('common')
  return (
    <Layout
      title={
        t('header.nav.translation') +
        ' | ' +
        t('header.title') +
        ' - ' +
        t('header.tagline')
      }
    >
      <Heading as="h2" mt="2em" size="5xl">
        {t('translation.title')}
      </Heading>
      {lang === 'ja' && <TranslationJa />}
      {lang === 'es' && <TranslationEs />}
      {lang === 'en' && <TranslationEn />}
      <Contact />
    </Layout>
  )
}

export default Translation
