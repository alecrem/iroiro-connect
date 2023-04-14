import type { NextPage } from 'next'
import { Heading } from '@chakra-ui/react'
import useTranslation from 'next-translate/useTranslation'
import Layout from '../components/Layout'
import { AiJa, AiEs, AiEn } from '../components/Ai/'

const Ai: NextPage = () => {
  const { t, lang } = useTranslation('common')
  return (
    <Layout>
      <Heading as="h2" mt="2em">
        {t('ai.title')}
      </Heading>
      {lang === 'ja' && <AiJa />}
      {lang === 'es' && <AiEs />}
      {lang === 'en' && <AiEn />}
    </Layout>
  )
}

export default Ai
