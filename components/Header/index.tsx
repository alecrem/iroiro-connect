import { useState } from 'react'
import {
  Button,
  Heading,
  HStack,
  VStack,
  Image,
  IconButton,
  Box,
  Link,
  Flex
} from '@chakra-ui/react'
import { FC } from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import useTranslation from 'next-translate/useTranslation'
import setLanguage from 'next-translate/setLanguage'

const Header: FC = () => {
  const [display, changeDisplay] = useState('none')
  const router = useRouter()
  const { t, lang } = useTranslation('common')
  return (
    <>
      <Flex>
        <Flex position="fixed" top="1rem" right="1rem" align="center">
          <IconButton
            aria-label="Open Menu"
            size="lg"
            icon={<HamburgerIcon />}
            onClick={() => changeDisplay('flex')}
            // Mobile only
            display={['flex', 'flex', 'none', 'none']}
          />
        </Flex>

        <Flex
          w="100vw"
          // Only when menu open
          display={display}
          bgColor="gray.50"
          zIndex={20}
          h="100vh"
          pos="fixed"
          top="0"
          left="0"
          overflowY="auto"
          flexDir="column"
        >
          <Flex justify="flex-end">
            <IconButton
              mt={2}
              mr={2}
              aria-label="Close Menu"
              size="lg"
              icon={<CloseIcon />}
              onClick={() => changeDisplay('none')}
            />
          </Flex>

          <Flex flexDir="column" align="center">
            <NextLink passHref href="/ai" locale={router.locale}>
              <Button
                as="a"
                variant="ghost"
                aria-label={t('header.nav.ai')}
                my={2}
                w="100%"
              >
                {t('header.nav.ai')}
              </Button>
            </NextLink>
            <NextLink passHref href="/" locale={router.locale}>
              <Button
                as="a"
                variant="ghost"
                aria-label={t('header.nav.index')}
                my={2}
                w="100%"
              >
                {t('header.nav.index')}
              </Button>
            </NextLink>
            <NextLink passHref href="/travel" locale={router.locale}>
              <Button
                as="a"
                variant="ghost"
                aria-label={t('header.nav.travel')}
                my={2}
                w="100%"
              >
                {t('header.nav.travel')}
              </Button>
            </NextLink>
            <NextLink passHref href="/translation" locale={router.locale}>
              <Button
                as="a"
                variant="ghost"
                aria-label={t('header.nav.translation')}
                my={2}
                w="100%"
              >
                {t('header.nav.translation')}
              </Button>
            </NextLink>
            {lang !== 'ja' && (
              <Box p={4} pr={0}>
                <Button onClick={async () => await setLanguage('ja')}>
                  日本語
                </Button>
              </Box>
            )}
            {lang !== 'es' && (
              <Box p={4} pr={0}>
                <Button onClick={async () => await setLanguage('es')}>
                  Español
                </Button>
              </Box>
            )}
            {lang !== 'en' && (
              <Box p={4} pr={0}>
                <Button onClick={async () => await setLanguage('en')}>
                  English
                </Button>
              </Box>
            )}
          </Flex>
        </Flex>
      </Flex>

      <HStack spacing="24px">
        <Image
          src="/cropped-iroiro-puzzle.png"
          alt={t('header.logoalt')}
          htmlHeight={'64'}
          htmlWidth={'64'}
        />
        <VStack alignItems="left">
          <Heading as="h1">{t('header.title')}</Heading>
          <Heading as="h4" size="xs">
            {t('header.tagline')}
          </Heading>
        </VStack>
      </HStack>
      <Flex
        // Desktop only
        display={['none', 'none', 'flex', 'flex']}
        direction="row"
        pl={'88px'}
      >
        <NextLink passHref href="/ai" locale={router.locale}>
          <Link _focus={{ boxShadow: 'none' }} pr={1} pt={4} pb={4}>
            {t('header.nav.ai')}
          </Link>
        </NextLink>
        <NextLink passHref href="/" locale={router.locale}>
          <Link _focus={{ boxShadow: 'none' }} href="/" p={4} pr={1}>
            {t('header.nav.index')}
          </Link>
        </NextLink>
        <NextLink passHref href="/travel" locale={router.locale}>
          <Link _focus={{ boxShadow: 'none' }} p={4} pr={1}>
            {t('header.nav.travel')}
          </Link>
        </NextLink>
        <NextLink passHref href="/translation" locale={router.locale}>
          <Link _focus={{ boxShadow: 'none' }} p={4} pr={1}>
            {t('header.nav.translation')}
          </Link>
        </NextLink>
        {lang !== 'ja' && (
          <Box p={4} pr={0}>
            <Button size="xs" onClick={async () => await setLanguage('ja')}>
              日本語
            </Button>
          </Box>
        )}
        {lang !== 'es' && (
          <Box p={4} pr={0}>
            <Button size="xs" onClick={async () => await setLanguage('es')}>
              Español
            </Button>
          </Box>
        )}
        {lang !== 'en' && (
          <Box p={4} pr={0}>
            <Button size="xs" onClick={async () => await setLanguage('en')}>
              English
            </Button>
          </Box>
        )}
      </Flex>
    </>
  )
}

export default Header
