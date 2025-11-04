import { Button } from '@chakra-ui/react'
import { FC } from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'
import { ColorModeButton } from '../ui/color-mode'

const NavLinksMobile: FC = () => {
  const router = useRouter()
  const { t } = useTranslation('common')
  return (
    <>
      <Button
        asChild
        variant="ghost"
        aria-label={t('header.nav.ai')}
        my={2}
        w="100%"
      >
        <NextLink href="/ai" locale={router.locale}>
          {t('header.nav.ai')}
        </NextLink>
      </Button>
      <Button
        asChild
        variant="ghost"
        aria-label={t('header.nav.index')}
        my={2}
        w="100%"
      >
        <NextLink href="/" locale={router.locale}>
          {t('header.nav.index')}
        </NextLink>
      </Button>
      <Button
        asChild
        variant="ghost"
        aria-label={t('header.nav.travel')}
        my={2}
        w="100%"
      >
        <NextLink href="/travel" locale={router.locale}>
          {t('header.nav.travel')}
        </NextLink>
      </Button>
      <Button
        asChild
        variant="ghost"
        aria-label={t('header.nav.translation')}
        my={2}
        w="100%"
      >
        <NextLink href="/translation" locale={router.locale}>
          {t('header.nav.translation')}
        </NextLink>
      </Button>
      <Button
        asChild
        variant="ghost"
        aria-label={t('header.nav.contact')}
        my={2}
        w="100%"
      >
        <NextLink href="/contact" locale={router.locale}>
          {t('header.nav.contact')}
        </NextLink>
      </Button>
      <ColorModeButton size="md" my={2} />
    </>
  )
}

export default NavLinksMobile
