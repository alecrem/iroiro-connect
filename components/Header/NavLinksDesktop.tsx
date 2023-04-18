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
    </>
  )
}

export default NavLinksDesktop
