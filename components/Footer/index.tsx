import { Box, Text } from '@chakra-ui/react'
import useTranslation from 'next-translate/useTranslation'

const Footer: React.FC = () => {
  const { t } = useTranslation('common')
  return (
    <Box pt={10} pb={5} bottom={0} position="relative">
      <Text>{t('footer.copyright')}</Text>
    </Box>
  )
}

export default Footer
