import {
  Button,
  Heading,
  HStack,
  VStack,
  Image,
  Stack,
  Box,
  Link
} from '@chakra-ui/react'
import { FC } from 'react'
import { default as NextLink } from 'next/link'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'
import setLanguage from 'next-translate/setLanguage'

const Header: FC = () => {
  const router = useRouter()
  const { t, lang } = useTranslation('common')
  return (
    <>
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
      <Stack direction="row" spacing={0} pl={'88px'}>
        <NextLink passHref href="/ai" locale={router.locale}>
          <Link _focus={{ boxShadow: 'none' }} pr={4} pt={4} pb={4}>
            <Box as="span" display={{ base: 'none', md: 'block' }}>
              {t('header.nav.ai')}
            </Box>
          </Link>
        </NextLink>
        <NextLink passHref href="/" locale={router.locale}>
          <Link _focus={{ boxShadow: 'none' }} href="/" p={4}>
            <Box as="span" display={{ base: 'none', md: 'block' }}>
              {t('header.nav.index')}
            </Box>
          </Link>
        </NextLink>
        <NextLink passHref href="/travel" locale={router.locale}>
          <Link _focus={{ boxShadow: 'none' }} p={4}>
            <Box as="span" display={{ base: 'none', md: 'block' }}>
              {t('header.nav.travel')}
            </Box>
          </Link>
        </NextLink>
        <NextLink passHref href="/translation" locale={router.locale}>
          <Link _focus={{ boxShadow: 'none' }} p={4}>
            <Box as="span" display={{ base: 'none', md: 'block' }}>
              {t('header.nav.translation')}
            </Box>
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
      </Stack>
    </>
  )
}

export default Header
