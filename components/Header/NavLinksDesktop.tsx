import { Link } from '@chakra-ui/react'
import { FC } from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'

const NavLinksDesktop: FC = () => {
  const router = useRouter()
  const { t } = useTranslation('common')
  return (
    <>
      <Link asChild _focus={{ boxShadow: 'none' }} pr={1} pt={4} pb={4}>
        <NextLink href="/ai" locale={router.locale}>
          {t('header.nav.ai')}
        </NextLink>
      </Link>
      <Link asChild _focus={{ boxShadow: 'none' }} p={4} pr={1}>
        <NextLink href="/" locale={router.locale}>
          {t('header.nav.index')}
        </NextLink>
      </Link>
      <Link asChild _focus={{ boxShadow: 'none' }} p={4} pr={1}>
        <NextLink href="/travel" locale={router.locale}>
          {t('header.nav.travel')}
        </NextLink>
      </Link>
      <Link asChild _focus={{ boxShadow: 'none' }} p={4} pr={1}>
        <NextLink href="/translation" locale={router.locale}>
          {t('header.nav.translation')}
        </NextLink>
      </Link>
      <Link asChild _focus={{ boxShadow: 'none' }} p={4} pr={1}>
        <NextLink href="/contact" locale={router.locale}>
          {t('header.nav.contact')}
        </NextLink>
      </Link>
    </>
  )
}

export default NavLinksDesktop
