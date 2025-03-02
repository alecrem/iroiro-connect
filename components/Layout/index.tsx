import { ReactElement, ReactNode } from 'react'
import Head from 'next/head'
import { Container } from '@chakra-ui/react'
import Header from '../Header'
import Footer from '../Footer'

interface Props {
  title: string
  children: ReactElement | ReactNode
}

const Layout: React.FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Container maxW="5xl" mt="2em" mb="4em">
        <Header />
        {children}
        <Footer />
      </Container>
    </>
  )
}

export default Layout
