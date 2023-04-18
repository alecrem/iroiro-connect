import { Button } from '@chakra-ui/react'
import { FC } from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'

const NavLinksMobile: FC = () => {
  const router = useRouter()
  const { t } = useTranslation('common')
  return (
    <>
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
    </>
  )
}

export default NavLinksMobile
