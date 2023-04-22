import type { NextPage } from 'next'
import { Heading } from '@chakra-ui/react'
import useTranslation from 'next-translate/useTranslation'
import Layout from '../components/Layout'
import Contact from '../components/Contact'

const ContactPage: NextPage = () => {
  const { t } = useTranslation('common')
  return (
    <Layout>
      <Heading as="h2" mt="2em">
        {t('contact.title')}
      </Heading>
      <Contact />
    </Layout>
  )
}

export default ContactPage
