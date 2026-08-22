import { Heading } from '@chakra-ui/react'
import type { NextPage } from 'next'
import useTranslation from 'next-translate/useTranslation'
import { AiEn, AiEs, AiJa } from '../components/Ai/'
import Contact from '../components/Contact'
import Layout from '../components/Layout'

const Ai: NextPage = () => {
  const { t, lang } = useTranslation('common')
  return (
    <Layout
      title={
        t('header.nav.ai') +
        ' | ' +
        t('header.title') +
        ' - ' +
        t('header.tagline')
      }
    >
      <Heading as="h2" mt="2em" size="5xl">
        {t('ai.title')}
      </Heading>
      {lang === 'ja' && <AiJa />}
      {lang === 'es' && <AiEs />}
      {lang === 'en' && <AiEn />}
      <Contact />
    </Layout>
  )
}

export default Ai
