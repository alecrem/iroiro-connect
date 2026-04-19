import { Button, Box, ConditionalValue } from '@chakra-ui/react'
import { FC } from 'react'
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'

interface IProps {
  size: ConditionalValue<
    'sm' | 'md' | 'lg' | 'xl' | '2xl' | '2xs' | 'xs' | undefined
  >
}

const NavLanguageButtons: FC<IProps> = (props: {
  size: ConditionalValue<
    'sm' | 'md' | 'lg' | 'xl' | '2xl' | '2xs' | 'xs' | undefined
  >
}) => {
  const { lang } = useTranslation('common')
  const router = useRouter()

  const switchLanguage = (locale: string) =>
    router.push(`/${locale}${router.asPath}`, undefined, { locale: false })

  return (
    <>
      {lang !== 'ja' && (
        <Box p={4} pr={0}>
          <Button
            size={props.size}
            variant="subtle"
            onClick={() => switchLanguage('ja')}
          >
            日本語
          </Button>
        </Box>
      )}
      {lang !== 'es' && (
        <Box p={4} pr={0}>
          <Button
            size={props.size}
            variant="subtle"
            onClick={() => switchLanguage('es')}
          >
            Español
          </Button>
        </Box>
      )}
      {lang !== 'en' && (
        <Box p={4} pr={0}>
          <Button
            size={props.size}
            variant="subtle"
            onClick={() => switchLanguage('en')}
          >
            English
          </Button>
        </Box>
      )}
    </>
  )
}

export default NavLanguageButtons
