import { Button, Box } from '@chakra-ui/react'
import { FC } from 'react'
import useTranslation from 'next-translate/useTranslation'
import setLanguage from 'next-translate/setLanguage'

interface IProps {
  size: string
}

const NavLanguageButtons: FC<IProps> = (props: { size: string }) => {
  const { lang } = useTranslation('common')
  return (
    <>
      {lang !== 'ja' && (
        <Box p={4} pr={0}>
          <Button
            size={props.size}
            onClick={async () => await setLanguage('ja')}
          >
            日本語
          </Button>
        </Box>
      )}
      {lang !== 'es' && (
        <Box p={4} pr={0}>
          <Button
            size={props.size}
            onClick={async () => await setLanguage('es')}
          >
            Español
          </Button>
        </Box>
      )}
      {lang !== 'en' && (
        <Box p={4} pr={0}>
          <Button
            size={props.size}
            onClick={async () => await setLanguage('en')}
          >
            English
          </Button>
        </Box>
      )}
    </>
  )
}

export default NavLanguageButtons
