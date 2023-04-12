import { ReactElement, ReactNode } from 'react'
import { Box, Container } from '@chakra-ui/react'
import Header from '../Header'
import Footer from '../Footer'

interface Props {
  children: ReactElement | ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Container maxW="container.lg" mt="2em" mb="4em">
      <Header />
      {children}
      <Footer />
    </Container>
  )
}

export default Layout
