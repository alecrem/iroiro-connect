import { Heading } from '@chakra-ui/react'
import type { NextPage } from 'next'
import useTranslation from 'next-translate/useTranslation'
import Contact from '../components/Contact'
import Layout from '../components/Layout'

const ContactPage: NextPage = () => {
  const { t } = useTranslation('common')
  return (
    <Layout
      title={
        t('header.nav.contact') +
        ' | ' +
        t('header.title') +
        ' - ' +
        t('header.tagline')
      }
    >
      <Heading as="h2" mt="2em" size="5xl">
        {t('contact.title')}
      </Heading>
      <Contact />
    </Layout>
  )
}

export default ContactPage
